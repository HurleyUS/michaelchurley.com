import type { StaticPost } from "./static-posts";

const content = `## TLDR;

**The “29k” was not your weekly allowance. I found no 29k limit in Codex’s public instructions, T3 Code, or the recorded local instructions.**

I checked today’s upstream versions and the saved earlier runs:

| Source | Finding |
|---|---|
| [Codex’s actual model instructions](https://github.com/openai/codex/blob/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73/codex-rs/models-manager/models.json#L251) | Exactly match the earlier run’s saved instructions. They explicitly require finishing the task without settling for partial work to save tokens. |
| [T3’s Codex request code](https://github.com/pingdotgg/t3code/blob/4ee6bfd50ef4a089440d5c3662db2298da9cc50e/apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts#L727) | Passes model, reasoning effort, mode, and app instructions. No 29k cap. |
| Local \`AGENTS.md\`, Codex configuration, model cache, and recorded instruction messages | No 29k instruction. Codex’s optional context-budget feature is disabled in the model catalog. |

The strongest evidence is the earlier EditBay run: a related “29k” statement appeared before any tool call, while the recorded input was **25,912 tokens out of a 258,400-token context window**, and **93% of the weekly allowance remained**. Another recovered run showed **80% remaining**.

The number appears in **model-generated reasoning summaries**. My best inference is that the model was referring to a per-generation reasoning allocation or estimate. The public code and logs cannot establish whether that was a real backend allocation or an invented estimate. I also couldn’t recover your exact sentence verbatim.

Generation limits, context limits, and weekly account usage are separate things. [OpenAI documents that distinction.](https://developers.openai.com/api/docs/guides/conversation-state) None of that authorizes me to shrink the task or stop early.

I saved the source links, versions, comparisons, and sanitized evidence in the [full audit report](/home/michael/Projects/prompt-budget-audit-20261004/REPORT.md).

---

The TLDR above is the agent’s audit summary, preserved verbatim. Here’s why I asked for it.

## I paid for the work. I wanted the work finished.

In an earlier thread, I noticed my agent framing the job around a supposed token budget:

> I need to be cautious about token budgets, I have 29k tokens to work with, so I'll focus on efficiency and organization

I’m on the 20x Max plan. I had roughly 80% of my weekly allowance left. So where did 29k come from? Codex’s instructions? T3 Code? An \`AGENTS.md\` somewhere on my machine?

I asked the agent to check the actual source and saved runs. No guessing from a product name. No treating a confident sentence as proof.

The audit was performed on **October 4, 2026**. Its GitHub links point to the commits inspected that day. “Latest” in this post means latest at the time of that audit.

## Start with the instructions the model actually received

Codex has more than one place to look for prompts. The older generic \`prompt.md\` is not enough to establish what this model received.

For \`gpt-6.1-sol\`, the relevant public template is in [Codex’s model catalog](https://github.com/openai/codex/blob/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73/codex-rs/models-manager/models.json#L251), under \`model_messages.instructions_template\`.

The audit compared that upstream template with the current local cache and the base instructions saved in the earlier sessions. All three matched exactly: **21,769 characters**, with the same SHA-256 hash:

\`e1bdd4f8f0df4b20f4a0ffc8a861ce819df45325d8cecdfb92e80379cf8d142e\`

Those instructions contain no 29k task budget. They require the agent to finish the requested work, avoid leaving a partial solution to save tokens, and continue after context compaction.

That is a fairly clear operating instruction.

## Codex has budget features. They weren’t active here.

Finding the word “budget” in a repository does not prove that a feature caused a particular response.

Codex’s [context-budget messages](https://github.com/openai/codex/blob/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73/codex-rs/core/src/context/token_budget_context.rs#L173) can tell a model how much context space remains. The inspected local and upstream catalogs had \`token_budget.enabled\` set to \`false\`. The audited sessions contained no recorded messages from that feature.

There is also a [shared session-budget mechanism](https://github.com/openai/codex/blob/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73/codex-rs/core/src/context/rollout_budget.rs#L23). Its feature defaults to disabled. The audit found no corresponding local configuration and no recorded injected session-budget messages.

The inspected [request structure](https://github.com/openai/codex/blob/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73/codex-rs/codex-api/src/common.rs#L279) had no numeric 29k output cap. The [reasoning settings](https://github.com/openai/codex/blob/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73/codex-rs/codex-api/src/common.rs#L158) covered effort, summary, and context.

These are client-side findings. They do not reveal every setting applied by the inference backend.

## T3 Code wasn’t sending a 29k cap

The audit followed [T3’s Codex adapter](https://github.com/pingdotgg/t3code/blob/4ee6bfd50ef4a089440d5c3662db2298da9cc50e/apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts#L727) through request assembly and [thread configuration](https://github.com/pingdotgg/t3code/blob/4ee6bfd50ef4a089440d5c3662db2298da9cc50e/apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts#L1193).

T3 passed the selected model, reasoning effort, mode, service tier, permissions, and app context. Its thread configuration supplied the checklist tool and MCP connection. No 29k generation or task limit appeared there.

The audit also checked T3’s [Codex developer instructions](https://github.com/pingdotgg/t3code/blob/4ee6bfd50ef4a089440d5c3662db2298da9cc50e/apps/server/src/provider/CodexDeveloperInstructions.ts#L206), [runtime instructions](https://github.com/pingdotgg/t3code/blob/4ee6bfd50ef4a089440d5c3662db2298da9cc50e/apps/server/src/provider/RuntimeInstructions.ts), and [orchestration instructions](https://github.com/pingdotgg/t3code/blob/4ee6bfd50ef4a089440d5c3662db2298da9cc50e/apps/server/src/provider/T3OrchestrationInstructions.ts). None supplied that number.

The current T3 service reported \`0.0.46-nightly.20261004.2648\`. The current Codex binaries reported \`0.160.0\`. The earlier EditBay session used \`0.159.3\`. Its saved base instructions still matched the inspected upstream template exactly.

## Today’s files aren’t proof of yesterday’s inputs

Local instructions change. Reading today’s \`AGENTS.md\` and declaring the mystery solved would have been sloppy.

The audit checked the actual recorded initial developer and user messages, including memory and skill guidance, alongside Codex configuration, the model cache, and T3 provider settings. It compared the current global instructions and an older backup with the versions saved in those runs.

The current global file matched the LAN Mouse and investigation inputs. The older global backup matched the earlier EditBay inputs. The saved EditBay instructions also included that project’s rules, which have changed since the run.

No 29k instruction appeared in the audited initial instructions.

**A publication note:** while preparing this post, the agent found a separate rule in this website repository’s \`AGENTS.md\`: 4,000 tokens per task and 30,000 per session. That file was read after the audit, for publishing this post. It was not part of the recorded inputs examined for the earlier runs. The audit’s local-instruction finding applies to those recorded inputs, not every instruction file anywhere on this machine.

## The saved runs are the strongest evidence

The earlier EditBay run put the timeline beyond a reasonable misunderstanding: the related 29k statement appeared **before any tool call or tool result**. A file opened during that task could not have supplied its initial appearance.

| Run | First related 29k mention, UTC | Input tokens immediately before it | Effective context window | Weekly allowance left |
|---|---|---|---|---|
| EditBay: Build Enterprise Media Production Suite | October 3, 20:04:59 | 25,912 | 258,400 | 93% |
| LAN Mouse Clipboard Sharing Support | October 4, 13:56:17 | 42,200 | 258,400 | 80% |

The local model catalog advertised a 272,000-token context window. Its 95% effective window was 258,400. The recorded rate-limit window was 10,080 minutes: one week.

At the start of the investigation, the newer weekly reading was 22% used, or 78% left. Usage had moved. There was still substantial headroom.

The exact sentence I supplied was not recovered verbatim. Related 29k statements were recovered in the two runs above. That distinction belongs in the result, even when a tidier story would be easier to write.

## Three limits. Three different meanings.

**Context** is the space available for the conversation and related material within a model request.

**Generation** is the output produced for that request. Generated reasoning consumes output tokens too.

**Account usage** is the subscription allowance tracked across requests over a period of time.

[OpenAI’s conversation-state documentation](https://developers.openai.com/api/docs/guides/conversation-state) explains context and output limits. Its [reasoning documentation](https://developers.openai.com/api/docs/guides/reasoning) explains reasoning-token usage. A large weekly allowance does not establish an unlimited single generation. A claimed generation budget does not establish that the weekly allowance is exhausted.

The number appeared in model-generated reasoning summaries. The audit’s best inference is a per-generation reasoning allocation or estimate. Public client code and saved logs cannot establish whether 29,000 was an actual backend allocation or an invented estimate.

A [public Codex issue](https://github.com/openai/codex/issues/49735) reports similar generated budget estimates and premature stopping. It is another user observation, not an official explanation of the cause.

## An estimate is not permission to quit

There was no supported local 29k setting identified by this audit to remove.

There was also no evidence that my weekly allowance forced the agent to shrink the job. The public model instructions required follow-through.

If a real enforced limit interrupts the work, show the evidence and resume when possible. If the conversation needs compaction, compact it and continue. A model’s confident estimate is not a reason to quietly reduce the scope I authorized.

I asked for a complete system. Finish the system.

## Check the evidence

The [full audit report](/home/michael/Projects/prompt-budget-audit-20261004/REPORT.md) includes the pinned source versions, comparisons, and limitations. The [sanitized evidence file](/blog/codex-29k-token-budget/evidence.json) contains instruction hashes, session metadata, and recorded usage fields. It contains no copied reasoning text or developer prompt text.

The report preserves what was checked on October 4, 2026. It does not claim that future versions of Codex or T3 will behave the same way.
`;

export const codexBudgetPost: StaticPost = {
  _id: "static:codex-29k-token-budget",
  title: "Codex Said It Had 29k Tokens. I Checked the Source.",
  slug: "codex-29k-token-budget",
  excerpt:
    "I had 80% of my weekly allowance left. My agent said it had 29k tokens. I audited Codex, T3 Code, and the saved runs to find where that number came from.",
  tags: ["Codex", "T3 Code", "AI agents", "token budgets"],
  featured: true,
  published: true,
  publishedAt: 1791136800000,
  readingTime: 7,
  content,
};

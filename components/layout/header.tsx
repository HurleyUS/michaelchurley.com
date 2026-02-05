import Logo from "@/components/ui/logo";
import MenuTop from "@/components/ui/menu-top";
import { ContainerBoxed } from "./containers";

export default async function Header() {
  return (
    <div className="w-full z-50 sticky top-0 left-0 right-0">
      <ContainerBoxed>
        <header className="flex flex-col items-stretch justify-center text-foreground m-xs md:-mx-md rounded-md shadow-2xl backdrop-blur-sm bg-Latte-Base/25 dark:bg-Mocha-Base/25">
          <div className="flex items-center justify-between gap-md p-xs w-full grow rounded-md bg-gradient-to-b from-Latte-Base/50 dark:from-Mocha-Base/50 to-Latte-Crust/75 dark:to-Mocha-Crust/75 shadow-inner shadow-white-600/30">
            <Logo multiplier={0.5} />
            <MenuTop />
          </div>
        </header>
      </ContainerBoxed>
    </div>
  );
}

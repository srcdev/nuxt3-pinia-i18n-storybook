import type { IAccountMenuItem } from "@/types/types.accountStore";

const useAccountMenuItems = () => {
  const accountMenuItems = useState<IAccountMenuItem[]>("accountMenuItems", () => []);

  const setAccountMenuItems = (payload: IAccountMenuItem[]) => {
    accountMenuItems.value = payload;
  };

  return {
    accountMenuItems,
    setAccountMenuItems
  };
};
export default useAccountMenuItems;

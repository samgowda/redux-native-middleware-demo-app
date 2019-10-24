export const SET_LOADER = "SET_LOADER";

interface SetLoader {
    flag: boolean;
    feature: string;
}

export const setLoader = ({ flag, feature }: SetLoader) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: flag,
  meta: { feature }
});

import Network from "types/network";
import { useAppSelector } from "app/hooks";
import {
  setName,
  setGender,
  setEducation,
  setBirthday,
  setPhone,
  setQq,
  setWechat,
  setAddress,
  setRelation,
  setId,
} from "features/networkSlice";
import { AppDispatch } from "./store";
import { useRouter } from "next/router";
export function selectNetwork() {
  const data: Network = {
    id: useAppSelector((state) => state.network.id),
    name: useAppSelector((state) => state.network.name),
    gender: useAppSelector((state) => state.network.gender),
    education: useAppSelector((state) => state.network.education),
    birthday: useAppSelector((state) => state.network.birthday),
    email: useAppSelector((state) => state.network.email),
    phone: useAppSelector((state) => state.network.phone),
    qq: useAppSelector((state) => state.network.qq),
    wechat: useAppSelector((state) => state.network.wechat),
    address: useAppSelector((state) => state.network.address),
    relation: useAppSelector((state) => state.network.relation),
  };
  return data;
}

export function dispatchNetwork(
  dispatch: AppDispatch,
  item: Network,
  method: string = ""
) {
  dispatch(setId(item.id));
  dispatch(setName(item.name));
  dispatch(setGender(item.gender));
  dispatch(setEducation(item.education));
  dispatch(setBirthday(item.birthday));
  dispatch(setPhone(item.phone));
  dispatch(setQq(item.qq));
  dispatch(setWechat(item.wechat));
  dispatch(setAddress(item.address));
  dispatch(setRelation(item.relation));
  if (method === "POST") {
    fetch(`/api/network/`, {
      method: "POST",
      body: JSON.stringify({ item }),
    });
  } else if (method === "PUT") {
    fetch(`/api/network/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({ item }),
    });
  }
}

export function UpdatePost(method: string, data: Network) {
  if (method === "UPDATE") {
    fetch(`/api/network/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else if (method === "CREATE") {
    fetch(`/api/network`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
    alert("wrong");
  }
}

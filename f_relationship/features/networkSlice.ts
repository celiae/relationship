import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "app/store";
import Network from "types/network";

const initialState: Network = {
  id: -1,
  name: "-1",
  gender: "-1",
  education: "-1",
  birthday: "2000-01-01",
  email: "-1",
  phone: "-1",
  qq: "-1",
  wechat: "-1",
  address: "-1",
  relation: "-1",
};
export const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    setId: (state, id) => {
      state.id = id.payload;
    },
    setName: (state, name) => {
      state.name = name.payload;
    },
    setGender: (state, gender) => {
      state.gender = gender.payload;
    },
    setEducation: (state, education) => {
      state.education = education.payload;
    },
    setBirthday: (state, birthday) => {
      state.birthday = birthday.payload;
    },
    setEmail: (state, email) => {
      state.email = email.payload;
    },
    setPhone: (state, phone) => {
      state.phone = phone.payload;
    },
    setQq: (state, qq) => {
      state.qq = qq.payload;
    },
    setWechat: (state, wechat) => {
      state.wechat = wechat.payload;
    },
    setAddress: (state, address) => {
      state.address = address.payload;
    },
    setRelation: (state, relation) => {
      state.relation = relation.payload;
    },
  },
});

export const {
  setId,
  setName,
  setGender,
  setEducation,
  setBirthday,
  setEmail,
  setPhone,
  setQq,
  setWechat,
  setAddress,
  setRelation,
} = networkSlice.actions;
export const selectid = (state: RootState) => state.network.id;
export const selectname = (state: RootState) => state.network.name;
export const selectgender = (state: RootState) => state.network.gender;
export const selecteducation = (state: RootState) => state.network.education;
export const selectbirthday = (state: RootState) => state.network.birthday;
export const selectemail = (state: RootState) => state.network.email;
export const selectphone = (state: RootState) => state.network.phone;
export const selectqq = (state: RootState) => state.network.qq;
export const selectwechat = (state: RootState) => state.network.wechat;
export const selectaddress = (state: RootState) => state.network.address;
export const selectrelation = (state: RootState) => state.network.relation;

export default networkSlice.reducer;

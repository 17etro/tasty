import { EmptyPage, Sentence } from "../ModalPages";

export const ModalTemplates = (data) => {
  switch (data.type) {
    case "sentence-modal":
      return <Sentence data={data} />;
    default:
      return <EmptyPage />;
  }
};

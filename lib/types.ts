type Messages = typeof import("@/messages/en.json");
type BsMessages = typeof import("@/messages/bs.json");

type IntlMessages = Messages & BsMessages;

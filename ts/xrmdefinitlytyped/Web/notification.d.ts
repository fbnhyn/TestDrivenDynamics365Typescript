interface Notification_Base extends WebEntity {
  createdon?: Date | null;
  createdonstring?: string | null;
  eventdata?: string | null;
  eventid?: number | null;
  notificationid?: string | null;
  notificationnumber?: number | null;
  organizationid?: string | null;
}
interface Notification_Relationships {
  userentityinstancedata_notification?: UserEntityInstanceData_Result[] | null;
}
interface Notification extends Notification_Base, Notification_Relationships {
}
interface Notification_Create extends Notification {
}
interface Notification_Update extends Notification {
}
interface Notification_Select {
  createdon: WebAttribute<Notification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonstring: WebAttribute<Notification_Select, { createdonstring: string | null }, {  }>;
  eventdata: WebAttribute<Notification_Select, { eventdata: string | null }, {  }>;
  eventid: WebAttribute<Notification_Select, { eventid: number | null }, {  }>;
  notificationid: WebAttribute<Notification_Select, { notificationid: string | null }, {  }>;
  notificationnumber: WebAttribute<Notification_Select, { notificationnumber: number | null }, {  }>;
  organizationid: WebAttribute<Notification_Select, { organizationid: string | null }, {  }>;
}
interface Notification_Filter {
  createdon: Date;
  createdonstring: string;
  eventdata: string;
  eventid: number;
  notificationid: XQW.Guid;
  notificationnumber: number;
  organizationid: XQW.Guid;
}
interface Notification_Expand {
  userentityinstancedata_notification: WebExpand<Notification_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_notification: UserEntityInstanceData_Result[] }>;
}
interface Notification_FormattedResult {
  createdon_formatted?: string;
}
interface Notification_Result extends Notification_Base, Notification_Relationships {
  "@odata.etag": string;
}
interface Notification_RelatedOne {
}
interface Notification_RelatedMany {
  userentityinstancedata_notification: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  notifications: WebMappingRetrieve<Notification_Select,Notification_Expand,Notification_Filter,Notification_Fixed,Notification_Result,Notification_FormattedResult>;
}
interface WebEntitiesRelated {
  notifications: WebMappingRelated<Notification_RelatedOne,Notification_RelatedMany>;
}
interface WebEntitiesCUDA {
  notifications: WebMappingCUDA<Notification_Create,Notification_Update,Notification_Select>;
}

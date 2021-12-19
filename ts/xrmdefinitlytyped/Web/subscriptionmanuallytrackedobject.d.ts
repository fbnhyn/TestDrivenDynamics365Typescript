interface SubscriptionManuallyTrackedObject_Base extends WebEntity {
  objectid?: string | null;
  objecttypecode?: string | null;
  subscriptionid?: string | null;
  subscriptionmanuallytrackedobjectid?: string | null;
  track?: boolean | null;
  versionnumber?: number | null;
}
interface SubscriptionManuallyTrackedObject_Relationships {
  contact_subscription_association?: Contact_Result[] | null;
  task_subscription_association?: Task_Result[] | null;
  userentityinstancedata_subscriptionmanuallytrackedobject?: UserEntityInstanceData_Result[] | null;
}
interface SubscriptionManuallyTrackedObject extends SubscriptionManuallyTrackedObject_Base, SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_Create extends SubscriptionManuallyTrackedObject {
}
interface SubscriptionManuallyTrackedObject_Update extends SubscriptionManuallyTrackedObject {
}
interface SubscriptionManuallyTrackedObject_Select {
  objectid: WebAttribute<SubscriptionManuallyTrackedObject_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<SubscriptionManuallyTrackedObject_Select, { objecttypecode: string | null }, {  }>;
  subscriptionid: WebAttribute<SubscriptionManuallyTrackedObject_Select, { subscriptionid: string | null }, {  }>;
  subscriptionmanuallytrackedobjectid: WebAttribute<SubscriptionManuallyTrackedObject_Select, { subscriptionmanuallytrackedobjectid: string | null }, {  }>;
  track: WebAttribute<SubscriptionManuallyTrackedObject_Select, { track: boolean | null }, {  }>;
  versionnumber: WebAttribute<SubscriptionManuallyTrackedObject_Select, { versionnumber: number | null }, {  }>;
}
interface SubscriptionManuallyTrackedObject_Filter {
  objectid: XQW.Guid;
  objecttypecode: string;
  subscriptionid: XQW.Guid;
  subscriptionmanuallytrackedobjectid: XQW.Guid;
  track: boolean;
  versionnumber: number;
}
interface SubscriptionManuallyTrackedObject_Expand {
  contact_subscription_association: WebExpand<SubscriptionManuallyTrackedObject_Expand, Contact_Select, Contact_Filter, { contact_subscription_association: Contact_Result[] }>;
  task_subscription_association: WebExpand<SubscriptionManuallyTrackedObject_Expand, Task_Select, Task_Filter, { task_subscription_association: Task_Result[] }>;
  userentityinstancedata_subscriptionmanuallytrackedobject: WebExpand<SubscriptionManuallyTrackedObject_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_subscriptionmanuallytrackedobject: UserEntityInstanceData_Result[] }>;
}
interface SubscriptionManuallyTrackedObject_FormattedResult {
}
interface SubscriptionManuallyTrackedObject_Result extends SubscriptionManuallyTrackedObject_Base, SubscriptionManuallyTrackedObject_Relationships {
  "@odata.etag": string;
}
interface SubscriptionManuallyTrackedObject_RelatedOne {
}
interface SubscriptionManuallyTrackedObject_RelatedMany {
  contact_subscription_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  task_subscription_association: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  userentityinstancedata_subscriptionmanuallytrackedobject: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  subscriptionmanuallytrackedobjects: WebMappingRetrieve<SubscriptionManuallyTrackedObject_Select,SubscriptionManuallyTrackedObject_Expand,SubscriptionManuallyTrackedObject_Filter,SubscriptionManuallyTrackedObject_Fixed,SubscriptionManuallyTrackedObject_Result,SubscriptionManuallyTrackedObject_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionmanuallytrackedobjects: WebMappingRelated<SubscriptionManuallyTrackedObject_RelatedOne,SubscriptionManuallyTrackedObject_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionmanuallytrackedobjects: WebMappingCUDA<SubscriptionManuallyTrackedObject_Create,SubscriptionManuallyTrackedObject_Update,SubscriptionManuallyTrackedObject_Select>;
}

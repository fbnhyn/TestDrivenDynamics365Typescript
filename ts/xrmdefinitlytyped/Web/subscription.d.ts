interface Subscription_Base extends WebEntity {
  clientversion?: string | null;
  completedsyncstartedon?: Date | null;
  completedsyncversionnumber?: number | null;
  lastsyncstartedon?: Date | null;
  machinename?: string | null;
  reinitialize?: boolean | null;
  resetforcreate?: boolean | null;
  subscriptionid?: string | null;
  subscriptiontype?: number | null;
  syncentrytablename?: string | null;
  systemuserid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface Subscription_Relationships {
  contact_subscription_association?: Contact_Result[] | null;
  subscription_subscriptionsyncinfo?: SubscriptionSyncInfo_Result[] | null;
  subscriptionclients_subscription?: SubscriptionClients_Result[] | null;
  task_subscription_association?: Task_Result[] | null;
  userentityinstancedata_subscription?: UserEntityInstanceData_Result[] | null;
}
interface Subscription extends Subscription_Base, Subscription_Relationships {
}
interface Subscription_Create extends Subscription {
}
interface Subscription_Update extends Subscription {
}
interface Subscription_Select {
  clientversion: WebAttribute<Subscription_Select, { clientversion: string | null }, {  }>;
  completedsyncstartedon: WebAttribute<Subscription_Select, { completedsyncstartedon: Date | null }, { completedsyncstartedon_formatted?: string }>;
  completedsyncversionnumber: WebAttribute<Subscription_Select, { completedsyncversionnumber: number | null }, {  }>;
  lastsyncstartedon: WebAttribute<Subscription_Select, { lastsyncstartedon: Date | null }, { lastsyncstartedon_formatted?: string }>;
  machinename: WebAttribute<Subscription_Select, { machinename: string | null }, {  }>;
  reinitialize: WebAttribute<Subscription_Select, { reinitialize: boolean | null }, {  }>;
  resetforcreate: WebAttribute<Subscription_Select, { resetforcreate: boolean | null }, {  }>;
  subscriptionid: WebAttribute<Subscription_Select, { subscriptionid: string | null }, {  }>;
  subscriptiontype: WebAttribute<Subscription_Select, { subscriptiontype: number | null }, {  }>;
  syncentrytablename: WebAttribute<Subscription_Select, { syncentrytablename: string | null }, {  }>;
  systemuserid: WebAttribute<Subscription_Select, { systemuserid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Subscription_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Subscription_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface Subscription_Filter {
  clientversion: string;
  completedsyncstartedon: Date;
  completedsyncversionnumber: number;
  lastsyncstartedon: Date;
  machinename: string;
  reinitialize: boolean;
  resetforcreate: boolean;
  subscriptionid: XQW.Guid;
  subscriptiontype: number;
  syncentrytablename: string;
  systemuserid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface Subscription_Expand {
  contact_subscription_association: WebExpand<Subscription_Expand, Contact_Select, Contact_Filter, { contact_subscription_association: Contact_Result[] }>;
  subscription_subscriptionsyncinfo: WebExpand<Subscription_Expand, SubscriptionSyncInfo_Select, SubscriptionSyncInfo_Filter, { subscription_subscriptionsyncinfo: SubscriptionSyncInfo_Result[] }>;
  subscriptionclients_subscription: WebExpand<Subscription_Expand, SubscriptionClients_Select, SubscriptionClients_Filter, { subscriptionclients_subscription: SubscriptionClients_Result[] }>;
  task_subscription_association: WebExpand<Subscription_Expand, Task_Select, Task_Filter, { task_subscription_association: Task_Result[] }>;
  userentityinstancedata_subscription: WebExpand<Subscription_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_subscription: UserEntityInstanceData_Result[] }>;
}
interface Subscription_FormattedResult {
  completedsyncstartedon_formatted?: string;
  lastsyncstartedon_formatted?: string;
}
interface Subscription_Result extends Subscription_Base, Subscription_Relationships {
  "@odata.etag": string;
}
interface Subscription_RelatedOne {
}
interface Subscription_RelatedMany {
  contact_subscription_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  subscription_subscriptionsyncinfo: WebMappingRetrieve<SubscriptionSyncInfo_Select,SubscriptionSyncInfo_Expand,SubscriptionSyncInfo_Filter,SubscriptionSyncInfo_Fixed,SubscriptionSyncInfo_Result,SubscriptionSyncInfo_FormattedResult>;
  subscriptionclients_subscription: WebMappingRetrieve<SubscriptionClients_Select,SubscriptionClients_Expand,SubscriptionClients_Filter,SubscriptionClients_Fixed,SubscriptionClients_Result,SubscriptionClients_FormattedResult>;
  task_subscription_association: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  userentityinstancedata_subscription: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  subscriptions: WebMappingRetrieve<Subscription_Select,Subscription_Expand,Subscription_Filter,Subscription_Fixed,Subscription_Result,Subscription_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptions: WebMappingRelated<Subscription_RelatedOne,Subscription_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptions: WebMappingCUDA<Subscription_Create,Subscription_Update,Subscription_Select>;
}

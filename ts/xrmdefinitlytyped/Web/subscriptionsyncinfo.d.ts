interface SubscriptionSyncInfo_Base extends WebEntity {
  clientversion?: string | null;
  datasize?: number | null;
  deleteobjectcount?: number | null;
  endtime?: Date | null;
  insertobjectcount?: number | null;
  starttime?: Date | null;
  subscriptionsyncinfoid?: number | null;
  syncresult?: boolean | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface SubscriptionSyncInfo_Relationships {
  userentityinstancedata_subscriptionsyncinfo?: UserEntityInstanceData_Result[] | null;
}
interface SubscriptionSyncInfo extends SubscriptionSyncInfo_Base, SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_Create extends SubscriptionSyncInfo {
  subscriptionid_bind$subscriptions?: string | null;
}
interface SubscriptionSyncInfo_Update extends SubscriptionSyncInfo {
}
interface SubscriptionSyncInfo_Select {
  clientversion: WebAttribute<SubscriptionSyncInfo_Select, { clientversion: string | null }, {  }>;
  datasize: WebAttribute<SubscriptionSyncInfo_Select, { datasize: number | null }, {  }>;
  deleteobjectcount: WebAttribute<SubscriptionSyncInfo_Select, { deleteobjectcount: number | null }, {  }>;
  endtime: WebAttribute<SubscriptionSyncInfo_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  insertobjectcount: WebAttribute<SubscriptionSyncInfo_Select, { insertobjectcount: number | null }, {  }>;
  starttime: WebAttribute<SubscriptionSyncInfo_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  subscriptionid_guid: WebAttribute<SubscriptionSyncInfo_Select, { subscriptionid_guid: string | null }, { subscriptionid_formatted?: string }>;
  subscriptionsyncinfoid: WebAttribute<SubscriptionSyncInfo_Select, { subscriptionsyncinfoid: number | null }, {  }>;
  syncresult: WebAttribute<SubscriptionSyncInfo_Select, { syncresult: boolean | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<SubscriptionSyncInfo_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SubscriptionSyncInfo_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface SubscriptionSyncInfo_Filter {
  clientversion: string;
  datasize: number;
  deleteobjectcount: number;
  endtime: Date;
  insertobjectcount: number;
  starttime: Date;
  subscriptionid_guid: XQW.Guid;
  subscriptionsyncinfoid: number;
  syncresult: boolean;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface SubscriptionSyncInfo_Expand {
  subscriptionid: WebExpand<SubscriptionSyncInfo_Expand, Subscription_Select, Subscription_Filter, { subscriptionid: Subscription_Result }>;
  userentityinstancedata_subscriptionsyncinfo: WebExpand<SubscriptionSyncInfo_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_subscriptionsyncinfo: UserEntityInstanceData_Result[] }>;
}
interface SubscriptionSyncInfo_FormattedResult {
  endtime_formatted?: string;
  starttime_formatted?: string;
  subscriptionid_formatted?: string;
}
interface SubscriptionSyncInfo_Result extends SubscriptionSyncInfo_Base, SubscriptionSyncInfo_Relationships {
  "@odata.etag": string;
  subscriptionid_guid: string | null;
}
interface SubscriptionSyncInfo_RelatedOne {
  subscriptionid: WebMappingRetrieve<Subscription_Select,Subscription_Expand,Subscription_Filter,Subscription_Fixed,Subscription_Result,Subscription_FormattedResult>;
}
interface SubscriptionSyncInfo_RelatedMany {
  userentityinstancedata_subscriptionsyncinfo: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  subscriptionsyncinfos: WebMappingRetrieve<SubscriptionSyncInfo_Select,SubscriptionSyncInfo_Expand,SubscriptionSyncInfo_Filter,SubscriptionSyncInfo_Fixed,SubscriptionSyncInfo_Result,SubscriptionSyncInfo_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionsyncinfos: WebMappingRelated<SubscriptionSyncInfo_RelatedOne,SubscriptionSyncInfo_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionsyncinfos: WebMappingCUDA<SubscriptionSyncInfo_Create,SubscriptionSyncInfo_Update,SubscriptionSyncInfo_Select>;
}

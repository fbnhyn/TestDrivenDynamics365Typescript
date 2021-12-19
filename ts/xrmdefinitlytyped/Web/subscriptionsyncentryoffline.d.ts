interface SubscriptionSyncEntryOffline_Base extends WebEntity {
  objectid?: string | null;
  objecttypecode?: number | null;
  subscriptionid?: string | null;
  syncstate?: number | null;
  versionnumber?: number | null;
}
interface SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline extends SubscriptionSyncEntryOffline_Base, SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_Create extends SubscriptionSyncEntryOffline {
}
interface SubscriptionSyncEntryOffline_Update extends SubscriptionSyncEntryOffline {
}
interface SubscriptionSyncEntryOffline_Select {
  objectid: WebAttribute<SubscriptionSyncEntryOffline_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<SubscriptionSyncEntryOffline_Select, { objecttypecode: number | null }, {  }>;
  subscriptionid: WebAttribute<SubscriptionSyncEntryOffline_Select, { subscriptionid: string | null }, {  }>;
  syncstate: WebAttribute<SubscriptionSyncEntryOffline_Select, { syncstate: number | null }, {  }>;
  versionnumber: WebAttribute<SubscriptionSyncEntryOffline_Select, { versionnumber: number | null }, {  }>;
}
interface SubscriptionSyncEntryOffline_Filter {
  objectid: XQW.Guid;
  objecttypecode: number;
  subscriptionid: XQW.Guid;
  syncstate: number;
  versionnumber: number;
}
interface SubscriptionSyncEntryOffline_Expand {
}
interface SubscriptionSyncEntryOffline_FormattedResult {
}
interface SubscriptionSyncEntryOffline_Result extends SubscriptionSyncEntryOffline_Base, SubscriptionSyncEntryOffline_Relationships {
  "@odata.etag": string;
}
interface SubscriptionSyncEntryOffline_RelatedOne {
}
interface SubscriptionSyncEntryOffline_RelatedMany {
}
interface WebEntitiesRetrieve {
  subscriptionsyncentriesoffline: WebMappingRetrieve<SubscriptionSyncEntryOffline_Select,SubscriptionSyncEntryOffline_Expand,SubscriptionSyncEntryOffline_Filter,SubscriptionSyncEntryOffline_Fixed,SubscriptionSyncEntryOffline_Result,SubscriptionSyncEntryOffline_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionsyncentriesoffline: WebMappingRelated<SubscriptionSyncEntryOffline_RelatedOne,SubscriptionSyncEntryOffline_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionsyncentriesoffline: WebMappingCUDA<SubscriptionSyncEntryOffline_Create,SubscriptionSyncEntryOffline_Update,SubscriptionSyncEntryOffline_Select>;
}

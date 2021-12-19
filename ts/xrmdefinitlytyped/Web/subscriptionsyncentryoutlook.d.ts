interface SubscriptionSyncEntryOutlook_Base extends WebEntity {
  objectid?: string | null;
  objecttypecode?: number | null;
  subscriptionid?: string | null;
  syncstate?: number | null;
  versionnumber?: number | null;
}
interface SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook extends SubscriptionSyncEntryOutlook_Base, SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_Create extends SubscriptionSyncEntryOutlook {
}
interface SubscriptionSyncEntryOutlook_Update extends SubscriptionSyncEntryOutlook {
}
interface SubscriptionSyncEntryOutlook_Select {
  objectid: WebAttribute<SubscriptionSyncEntryOutlook_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<SubscriptionSyncEntryOutlook_Select, { objecttypecode: number | null }, {  }>;
  subscriptionid: WebAttribute<SubscriptionSyncEntryOutlook_Select, { subscriptionid: string | null }, {  }>;
  syncstate: WebAttribute<SubscriptionSyncEntryOutlook_Select, { syncstate: number | null }, {  }>;
  versionnumber: WebAttribute<SubscriptionSyncEntryOutlook_Select, { versionnumber: number | null }, {  }>;
}
interface SubscriptionSyncEntryOutlook_Filter {
  objectid: XQW.Guid;
  objecttypecode: number;
  subscriptionid: XQW.Guid;
  syncstate: number;
  versionnumber: number;
}
interface SubscriptionSyncEntryOutlook_Expand {
}
interface SubscriptionSyncEntryOutlook_FormattedResult {
}
interface SubscriptionSyncEntryOutlook_Result extends SubscriptionSyncEntryOutlook_Base, SubscriptionSyncEntryOutlook_Relationships {
  "@odata.etag": string;
}
interface SubscriptionSyncEntryOutlook_RelatedOne {
}
interface SubscriptionSyncEntryOutlook_RelatedMany {
}
interface WebEntitiesRetrieve {
  subscriptionsyncentriesoutlook: WebMappingRetrieve<SubscriptionSyncEntryOutlook_Select,SubscriptionSyncEntryOutlook_Expand,SubscriptionSyncEntryOutlook_Filter,SubscriptionSyncEntryOutlook_Fixed,SubscriptionSyncEntryOutlook_Result,SubscriptionSyncEntryOutlook_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionsyncentriesoutlook: WebMappingRelated<SubscriptionSyncEntryOutlook_RelatedOne,SubscriptionSyncEntryOutlook_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionsyncentriesoutlook: WebMappingCUDA<SubscriptionSyncEntryOutlook_Create,SubscriptionSyncEntryOutlook_Update,SubscriptionSyncEntryOutlook_Select>;
}

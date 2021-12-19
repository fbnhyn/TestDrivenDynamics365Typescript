interface SubscriptionStatisticsOutlook_Base extends WebEntity {
  fullsyncrequired?: boolean | null;
  objecttypecode?: number | null;
  subscriptionid?: string | null;
}
interface SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook extends SubscriptionStatisticsOutlook_Base, SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_Create extends SubscriptionStatisticsOutlook {
}
interface SubscriptionStatisticsOutlook_Update extends SubscriptionStatisticsOutlook {
}
interface SubscriptionStatisticsOutlook_Select {
  fullsyncrequired: WebAttribute<SubscriptionStatisticsOutlook_Select, { fullsyncrequired: boolean | null }, {  }>;
  objecttypecode: WebAttribute<SubscriptionStatisticsOutlook_Select, { objecttypecode: number | null }, {  }>;
  subscriptionid: WebAttribute<SubscriptionStatisticsOutlook_Select, { subscriptionid: string | null }, {  }>;
}
interface SubscriptionStatisticsOutlook_Filter {
  fullsyncrequired: boolean;
  objecttypecode: number;
  subscriptionid: XQW.Guid;
}
interface SubscriptionStatisticsOutlook_Expand {
}
interface SubscriptionStatisticsOutlook_FormattedResult {
}
interface SubscriptionStatisticsOutlook_Result extends SubscriptionStatisticsOutlook_Base, SubscriptionStatisticsOutlook_Relationships {
  "@odata.etag": string;
}
interface SubscriptionStatisticsOutlook_RelatedOne {
}
interface SubscriptionStatisticsOutlook_RelatedMany {
}
interface WebEntitiesRetrieve {
  subscriptionstatisticsoutlookset: WebMappingRetrieve<SubscriptionStatisticsOutlook_Select,SubscriptionStatisticsOutlook_Expand,SubscriptionStatisticsOutlook_Filter,SubscriptionStatisticsOutlook_Fixed,SubscriptionStatisticsOutlook_Result,SubscriptionStatisticsOutlook_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionstatisticsoutlookset: WebMappingRelated<SubscriptionStatisticsOutlook_RelatedOne,SubscriptionStatisticsOutlook_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionstatisticsoutlookset: WebMappingCUDA<SubscriptionStatisticsOutlook_Create,SubscriptionStatisticsOutlook_Update,SubscriptionStatisticsOutlook_Select>;
}

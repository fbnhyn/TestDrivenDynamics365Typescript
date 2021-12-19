interface SubscriptionStatisticsOffline_Base extends WebEntity {
  fullsyncrequired?: boolean | null;
  objecttypecode?: number | null;
  subscriptionid?: string | null;
}
interface SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline extends SubscriptionStatisticsOffline_Base, SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_Create extends SubscriptionStatisticsOffline {
}
interface SubscriptionStatisticsOffline_Update extends SubscriptionStatisticsOffline {
}
interface SubscriptionStatisticsOffline_Select {
  fullsyncrequired: WebAttribute<SubscriptionStatisticsOffline_Select, { fullsyncrequired: boolean | null }, {  }>;
  objecttypecode: WebAttribute<SubscriptionStatisticsOffline_Select, { objecttypecode: number | null }, {  }>;
  subscriptionid: WebAttribute<SubscriptionStatisticsOffline_Select, { subscriptionid: string | null }, {  }>;
}
interface SubscriptionStatisticsOffline_Filter {
  fullsyncrequired: boolean;
  objecttypecode: number;
  subscriptionid: XQW.Guid;
}
interface SubscriptionStatisticsOffline_Expand {
}
interface SubscriptionStatisticsOffline_FormattedResult {
}
interface SubscriptionStatisticsOffline_Result extends SubscriptionStatisticsOffline_Base, SubscriptionStatisticsOffline_Relationships {
  "@odata.etag": string;
}
interface SubscriptionStatisticsOffline_RelatedOne {
}
interface SubscriptionStatisticsOffline_RelatedMany {
}
interface WebEntitiesRetrieve {
  subscriptionstatisticsofflineset: WebMappingRetrieve<SubscriptionStatisticsOffline_Select,SubscriptionStatisticsOffline_Expand,SubscriptionStatisticsOffline_Filter,SubscriptionStatisticsOffline_Fixed,SubscriptionStatisticsOffline_Result,SubscriptionStatisticsOffline_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionstatisticsofflineset: WebMappingRelated<SubscriptionStatisticsOffline_RelatedOne,SubscriptionStatisticsOffline_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionstatisticsofflineset: WebMappingCUDA<SubscriptionStatisticsOffline_Create,SubscriptionStatisticsOffline_Update,SubscriptionStatisticsOffline_Select>;
}

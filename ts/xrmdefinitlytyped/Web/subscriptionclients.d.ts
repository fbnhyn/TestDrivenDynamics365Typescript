interface SubscriptionClients_Base extends WebEntity {
  clientid?: string | null;
  isprimaryclient?: boolean | null;
  machinename?: string | null;
  subscriptionclientid?: string | null;
  subscriptionid?: string | null;
}
interface SubscriptionClients_Relationships {
  subscriptionid_subscription?: Subscription_Result | null;
}
interface SubscriptionClients extends SubscriptionClients_Base, SubscriptionClients_Relationships {
}
interface SubscriptionClients_Create extends SubscriptionClients {
  subscriptionid_subscription_bind$subscriptions?: string | null;
}
interface SubscriptionClients_Update extends SubscriptionClients {
}
interface SubscriptionClients_Select {
  clientid: WebAttribute<SubscriptionClients_Select, { clientid: string | null }, {  }>;
  isprimaryclient: WebAttribute<SubscriptionClients_Select, { isprimaryclient: boolean | null }, {  }>;
  machinename: WebAttribute<SubscriptionClients_Select, { machinename: string | null }, {  }>;
  subscriptionclientid: WebAttribute<SubscriptionClients_Select, { subscriptionclientid: string | null }, {  }>;
  subscriptionid: WebAttribute<SubscriptionClients_Select, { subscriptionid: string | null }, {  }>;
}
interface SubscriptionClients_Filter {
  clientid: XQW.Guid;
  isprimaryclient: boolean;
  machinename: string;
  subscriptionclientid: XQW.Guid;
  subscriptionid: XQW.Guid;
}
interface SubscriptionClients_Expand {
  subscriptionid_subscription: WebExpand<SubscriptionClients_Expand, Subscription_Select, Subscription_Filter, { subscriptionid_subscription: Subscription_Result }>;
}
interface SubscriptionClients_FormattedResult {
}
interface SubscriptionClients_Result extends SubscriptionClients_Base, SubscriptionClients_Relationships {
  "@odata.etag": string;
}
interface SubscriptionClients_RelatedOne {
  subscriptionid_subscription: WebMappingRetrieve<Subscription_Select,Subscription_Expand,Subscription_Filter,Subscription_Fixed,Subscription_Result,Subscription_FormattedResult>;
}
interface SubscriptionClients_RelatedMany {
}
interface WebEntitiesRetrieve {
  subscriptionclientsset: WebMappingRetrieve<SubscriptionClients_Select,SubscriptionClients_Expand,SubscriptionClients_Filter,SubscriptionClients_Fixed,SubscriptionClients_Result,SubscriptionClients_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptionclientsset: WebMappingRelated<SubscriptionClients_RelatedOne,SubscriptionClients_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptionclientsset: WebMappingCUDA<SubscriptionClients_Create,SubscriptionClients_Update,SubscriptionClients_Select>;
}

interface SubscriptionTrackingDeletedObject_Base extends WebEntity {
  crmcreatedon?: Date | null;
  deletetime?: Date | null;
  islogicaldelete?: boolean | null;
  objectid?: string | null;
  objecttypecode?: string | null;
  timestamp?: number | null;
}
interface SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject extends SubscriptionTrackingDeletedObject_Base, SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_Create extends SubscriptionTrackingDeletedObject {
}
interface SubscriptionTrackingDeletedObject_Update extends SubscriptionTrackingDeletedObject {
}
interface SubscriptionTrackingDeletedObject_Select {
  crmcreatedon: WebAttribute<SubscriptionTrackingDeletedObject_Select, { crmcreatedon: Date | null }, { crmcreatedon_formatted?: string }>;
  deletetime: WebAttribute<SubscriptionTrackingDeletedObject_Select, { deletetime: Date | null }, { deletetime_formatted?: string }>;
  islogicaldelete: WebAttribute<SubscriptionTrackingDeletedObject_Select, { islogicaldelete: boolean | null }, {  }>;
  objectid: WebAttribute<SubscriptionTrackingDeletedObject_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<SubscriptionTrackingDeletedObject_Select, { objecttypecode: string | null }, {  }>;
  timestamp: WebAttribute<SubscriptionTrackingDeletedObject_Select, { timestamp: number | null }, {  }>;
}
interface SubscriptionTrackingDeletedObject_Filter {
  crmcreatedon: Date;
  deletetime: Date;
  islogicaldelete: boolean;
  objectid: XQW.Guid;
  objecttypecode: string;
  timestamp: number;
}
interface SubscriptionTrackingDeletedObject_Expand {
}
interface SubscriptionTrackingDeletedObject_FormattedResult {
  crmcreatedon_formatted?: string;
  deletetime_formatted?: string;
}
interface SubscriptionTrackingDeletedObject_Result extends SubscriptionTrackingDeletedObject_Base, SubscriptionTrackingDeletedObject_Relationships {
  "@odata.etag": string;
}
interface SubscriptionTrackingDeletedObject_RelatedOne {
}
interface SubscriptionTrackingDeletedObject_RelatedMany {
}
interface WebEntitiesRetrieve {
  subscriptiontrackingdeletedobjects: WebMappingRetrieve<SubscriptionTrackingDeletedObject_Select,SubscriptionTrackingDeletedObject_Expand,SubscriptionTrackingDeletedObject_Filter,SubscriptionTrackingDeletedObject_Fixed,SubscriptionTrackingDeletedObject_Result,SubscriptionTrackingDeletedObject_FormattedResult>;
}
interface WebEntitiesRelated {
  subscriptiontrackingdeletedobjects: WebMappingRelated<SubscriptionTrackingDeletedObject_RelatedOne,SubscriptionTrackingDeletedObject_RelatedMany>;
}
interface WebEntitiesCUDA {
  subscriptiontrackingdeletedobjects: WebMappingCUDA<SubscriptionTrackingDeletedObject_Create,SubscriptionTrackingDeletedObject_Update,SubscriptionTrackingDeletedObject_Select>;
}

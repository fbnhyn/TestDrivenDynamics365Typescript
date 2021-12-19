interface BusinessDataLocalizedLabel_Base extends WebEntity {
  businessdatalocalizedlabelid?: string | null;
  label?: string | null;
  languageid?: number | null;
  objectcolumnname?: string | null;
  objectcolumnnumber?: number | null;
  versionnumber?: number | null;
}
interface BusinessDataLocalizedLabel_Relationships {
  BusinessDataLocalizedLabel_SyncErrors?: SyncError_Result[] | null;
}
interface BusinessDataLocalizedLabel extends BusinessDataLocalizedLabel_Base, BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_Create extends BusinessDataLocalizedLabel {
}
interface BusinessDataLocalizedLabel_Update extends BusinessDataLocalizedLabel {
}
interface BusinessDataLocalizedLabel_Select {
  businessdatalocalizedlabelid: WebAttribute<BusinessDataLocalizedLabel_Select, { businessdatalocalizedlabelid: string | null }, {  }>;
  label: WebAttribute<BusinessDataLocalizedLabel_Select, { label: string | null }, {  }>;
  languageid: WebAttribute<BusinessDataLocalizedLabel_Select, { languageid: number | null }, {  }>;
  objectcolumnname: WebAttribute<BusinessDataLocalizedLabel_Select, { objectcolumnname: string | null }, {  }>;
  objectcolumnnumber: WebAttribute<BusinessDataLocalizedLabel_Select, { objectcolumnnumber: number | null }, {  }>;
  objectid_guid: WebAttribute<BusinessDataLocalizedLabel_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  versionnumber: WebAttribute<BusinessDataLocalizedLabel_Select, { versionnumber: number | null }, {  }>;
}
interface BusinessDataLocalizedLabel_Filter {
  businessdatalocalizedlabelid: XQW.Guid;
  label: string;
  languageid: number;
  objectcolumnname: string;
  objectcolumnnumber: number;
  objectid_guid: XQW.Guid;
  versionnumber: number;
}
interface BusinessDataLocalizedLabel_Expand {
  BusinessDataLocalizedLabel_SyncErrors: WebExpand<BusinessDataLocalizedLabel_Expand, SyncError_Select, SyncError_Filter, { BusinessDataLocalizedLabel_SyncErrors: SyncError_Result[] }>;
}
interface BusinessDataLocalizedLabel_FormattedResult {
  objectid_formatted?: string;
}
interface BusinessDataLocalizedLabel_Result extends BusinessDataLocalizedLabel_Base, BusinessDataLocalizedLabel_Relationships {
  "@odata.etag": string;
  objectid_guid: string | null;
}
interface BusinessDataLocalizedLabel_RelatedOne {
}
interface BusinessDataLocalizedLabel_RelatedMany {
  BusinessDataLocalizedLabel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
}
interface WebEntitiesRetrieve {
  businessdatalocalizedlabels: WebMappingRetrieve<BusinessDataLocalizedLabel_Select,BusinessDataLocalizedLabel_Expand,BusinessDataLocalizedLabel_Filter,BusinessDataLocalizedLabel_Fixed,BusinessDataLocalizedLabel_Result,BusinessDataLocalizedLabel_FormattedResult>;
}
interface WebEntitiesRelated {
  businessdatalocalizedlabels: WebMappingRelated<BusinessDataLocalizedLabel_RelatedOne,BusinessDataLocalizedLabel_RelatedMany>;
}
interface WebEntitiesCUDA {
  businessdatalocalizedlabels: WebMappingCUDA<BusinessDataLocalizedLabel_Create,BusinessDataLocalizedLabel_Update,BusinessDataLocalizedLabel_Select>;
}

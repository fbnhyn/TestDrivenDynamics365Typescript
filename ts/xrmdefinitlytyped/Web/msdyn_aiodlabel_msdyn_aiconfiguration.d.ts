interface msdyn_aiodlabel_msdyn_aiconfiguration_Base extends WebEntity {
  msdyn_aiconfigurationid?: string | null;
  msdyn_aiodlabel_msdyn_aiconfigurationid?: string | null;
  msdyn_aiodlabelid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
  msdyn_aiodlabel_msdyn_aiconfiguration?: msdyn_AIConfiguration_Result[] | null;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration extends msdyn_aiodlabel_msdyn_aiconfiguration_Base, msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Create extends msdyn_aiodlabel_msdyn_aiconfiguration {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Update extends msdyn_aiodlabel_msdyn_aiconfiguration {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Select {
  msdyn_aiconfigurationid: WebAttribute<msdyn_aiodlabel_msdyn_aiconfiguration_Select, { msdyn_aiconfigurationid: string | null }, {  }>;
  msdyn_aiodlabel_msdyn_aiconfigurationid: WebAttribute<msdyn_aiodlabel_msdyn_aiconfiguration_Select, { msdyn_aiodlabel_msdyn_aiconfigurationid: string | null }, {  }>;
  msdyn_aiodlabelid: WebAttribute<msdyn_aiodlabel_msdyn_aiconfiguration_Select, { msdyn_aiodlabelid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_aiodlabel_msdyn_aiconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Filter {
  msdyn_aiconfigurationid: XQW.Guid;
  msdyn_aiodlabel_msdyn_aiconfigurationid: XQW.Guid;
  msdyn_aiodlabelid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Expand {
  msdyn_aiodlabel_msdyn_aiconfiguration: WebExpand<msdyn_aiodlabel_msdyn_aiconfiguration_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_aiodlabel_msdyn_aiconfiguration: msdyn_AIConfiguration_Result[] }>;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_FormattedResult {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Result extends msdyn_aiodlabel_msdyn_aiconfiguration_Base, msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
  "@odata.etag": string;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_RelatedOne {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_RelatedMany {
  msdyn_aiodlabel_msdyn_aiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aiodlabel_msdyn_aiconfigurationset: WebMappingRetrieve<msdyn_aiodlabel_msdyn_aiconfiguration_Select,msdyn_aiodlabel_msdyn_aiconfiguration_Expand,msdyn_aiodlabel_msdyn_aiconfiguration_Filter,msdyn_aiodlabel_msdyn_aiconfiguration_Fixed,msdyn_aiodlabel_msdyn_aiconfiguration_Result,msdyn_aiodlabel_msdyn_aiconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aiodlabel_msdyn_aiconfigurationset: WebMappingRelated<msdyn_aiodlabel_msdyn_aiconfiguration_RelatedOne,msdyn_aiodlabel_msdyn_aiconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aiodlabel_msdyn_aiconfigurationset: WebMappingCUDA<msdyn_aiodlabel_msdyn_aiconfiguration_Create,msdyn_aiodlabel_msdyn_aiconfiguration_Update,msdyn_aiodlabel_msdyn_aiconfiguration_Select>;
}

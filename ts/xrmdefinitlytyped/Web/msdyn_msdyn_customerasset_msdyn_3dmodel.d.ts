interface msdyn_msdyn_customerasset_msdyn_3dmodel_Base extends WebEntity {
  msdyn_3dmodelid?: string | null;
  msdyn_customerassetid?: string | null;
  msdyn_msdyn_customerasset_msdyn_3dmodelid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Relationships {
  msdyn_msdyn_customerasset_msdyn_3dmodel?: msdyn_3dmodel_Result[] | null;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel extends msdyn_msdyn_customerasset_msdyn_3dmodel_Base, msdyn_msdyn_customerasset_msdyn_3dmodel_Relationships {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Create extends msdyn_msdyn_customerasset_msdyn_3dmodel {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Update extends msdyn_msdyn_customerasset_msdyn_3dmodel {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Select {
  msdyn_3dmodelid: WebAttribute<msdyn_msdyn_customerasset_msdyn_3dmodel_Select, { msdyn_3dmodelid: string | null }, {  }>;
  msdyn_customerassetid: WebAttribute<msdyn_msdyn_customerasset_msdyn_3dmodel_Select, { msdyn_customerassetid: string | null }, {  }>;
  msdyn_msdyn_customerasset_msdyn_3dmodelid: WebAttribute<msdyn_msdyn_customerasset_msdyn_3dmodel_Select, { msdyn_msdyn_customerasset_msdyn_3dmodelid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_customerasset_msdyn_3dmodel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Filter {
  msdyn_3dmodelid: XQW.Guid;
  msdyn_customerassetid: XQW.Guid;
  msdyn_msdyn_customerasset_msdyn_3dmodelid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Expand {
  msdyn_msdyn_customerasset_msdyn_3dmodel: WebExpand<msdyn_msdyn_customerasset_msdyn_3dmodel_Expand, msdyn_3dmodel_Select, msdyn_3dmodel_Filter, { msdyn_msdyn_customerasset_msdyn_3dmodel: msdyn_3dmodel_Result[] }>;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_FormattedResult {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Result extends msdyn_msdyn_customerasset_msdyn_3dmodel_Base, msdyn_msdyn_customerasset_msdyn_3dmodel_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_RelatedOne {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_RelatedMany {
  msdyn_msdyn_customerasset_msdyn_3dmodel: WebMappingRetrieve<msdyn_3dmodel_Select,msdyn_3dmodel_Expand,msdyn_3dmodel_Filter,msdyn_3dmodel_Fixed,msdyn_3dmodel_Result,msdyn_3dmodel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_customerasset_msdyn_3dmodelset: WebMappingRetrieve<msdyn_msdyn_customerasset_msdyn_3dmodel_Select,msdyn_msdyn_customerasset_msdyn_3dmodel_Expand,msdyn_msdyn_customerasset_msdyn_3dmodel_Filter,msdyn_msdyn_customerasset_msdyn_3dmodel_Fixed,msdyn_msdyn_customerasset_msdyn_3dmodel_Result,msdyn_msdyn_customerasset_msdyn_3dmodel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_customerasset_msdyn_3dmodelset: WebMappingRelated<msdyn_msdyn_customerasset_msdyn_3dmodel_RelatedOne,msdyn_msdyn_customerasset_msdyn_3dmodel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_customerasset_msdyn_3dmodelset: WebMappingCUDA<msdyn_msdyn_customerasset_msdyn_3dmodel_Create,msdyn_msdyn_customerasset_msdyn_3dmodel_Update,msdyn_msdyn_customerasset_msdyn_3dmodel_Select>;
}

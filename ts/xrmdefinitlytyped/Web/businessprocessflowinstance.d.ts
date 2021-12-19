interface BusinessProcessFlowInstance_Base extends WebEntity {
  activestagestartedon?: Date | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  entity1id?: string | null;
  entity1objecttypecode?: string | null;
  entity2id?: string | null;
  entity2objecttypecode?: string | null;
  entity3id?: string | null;
  entity3objecttypecode?: string | null;
  entity4id?: string | null;
  entity4objecttypecode?: string | null;
  entity5id?: string | null;
  entity5objecttypecode?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  processstageid?: string | null;
  statecode?: businessprocessflowinstance_statecode | null;
  statuscode?: businessprocessflowinstance_statuscode | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance extends BusinessProcessFlowInstance_Base, BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_Create extends BusinessProcessFlowInstance {
}
interface BusinessProcessFlowInstance_Update extends BusinessProcessFlowInstance {
}
interface BusinessProcessFlowInstance_Select {
  activestagestartedon: WebAttribute<BusinessProcessFlowInstance_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<BusinessProcessFlowInstance_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<BusinessProcessFlowInstance_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<BusinessProcessFlowInstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BusinessProcessFlowInstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BusinessProcessFlowInstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entity1id: WebAttribute<BusinessProcessFlowInstance_Select, { entity1id: string | null }, {  }>;
  entity1objecttypecode: WebAttribute<BusinessProcessFlowInstance_Select, { entity1objecttypecode: string | null }, {  }>;
  entity2id: WebAttribute<BusinessProcessFlowInstance_Select, { entity2id: string | null }, {  }>;
  entity2objecttypecode: WebAttribute<BusinessProcessFlowInstance_Select, { entity2objecttypecode: string | null }, {  }>;
  entity3id: WebAttribute<BusinessProcessFlowInstance_Select, { entity3id: string | null }, {  }>;
  entity3objecttypecode: WebAttribute<BusinessProcessFlowInstance_Select, { entity3objecttypecode: string | null }, {  }>;
  entity4id: WebAttribute<BusinessProcessFlowInstance_Select, { entity4id: string | null }, {  }>;
  entity4objecttypecode: WebAttribute<BusinessProcessFlowInstance_Select, { entity4objecttypecode: string | null }, {  }>;
  entity5id: WebAttribute<BusinessProcessFlowInstance_Select, { entity5id: string | null }, {  }>;
  entity5objecttypecode: WebAttribute<BusinessProcessFlowInstance_Select, { entity5objecttypecode: string | null }, {  }>;
  modifiedby_guid: WebAttribute<BusinessProcessFlowInstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BusinessProcessFlowInstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BusinessProcessFlowInstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BusinessProcessFlowInstance_Select, { name: string | null }, {  }>;
  processid_guid: WebAttribute<BusinessProcessFlowInstance_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  processstageid: WebAttribute<BusinessProcessFlowInstance_Select, { processstageid: string | null }, {  }>;
  statecode: WebAttribute<BusinessProcessFlowInstance_Select, { statecode: businessprocessflowinstance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BusinessProcessFlowInstance_Select, { statuscode: businessprocessflowinstance_statuscode | null }, { statuscode_formatted?: string }>;
  traversedpath: WebAttribute<BusinessProcessFlowInstance_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<BusinessProcessFlowInstance_Select, { versionnumber: number | null }, {  }>;
}
interface BusinessProcessFlowInstance_Filter {
  activestagestartedon: Date;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entity1id: XQW.Guid;
  entity1objecttypecode: string;
  entity2id: XQW.Guid;
  entity2objecttypecode: string;
  entity3id: XQW.Guid;
  entity3objecttypecode: string;
  entity4id: XQW.Guid;
  entity4objecttypecode: string;
  entity5id: XQW.Guid;
  entity5objecttypecode: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  processid_guid: XQW.Guid;
  processstageid: XQW.Guid;
  statecode: businessprocessflowinstance_statecode;
  statuscode: businessprocessflowinstance_statuscode;
  traversedpath: string;
  versionnumber: number;
}
interface BusinessProcessFlowInstance_Expand {
  createdby: WebExpand<BusinessProcessFlowInstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<BusinessProcessFlowInstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<BusinessProcessFlowInstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<BusinessProcessFlowInstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
}
interface BusinessProcessFlowInstance_FormattedResult {
  activestagestartedon_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface BusinessProcessFlowInstance_Result extends BusinessProcessFlowInstance_Base, BusinessProcessFlowInstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  processid_guid: string | null;
}
interface BusinessProcessFlowInstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface BusinessProcessFlowInstance_RelatedMany {
}
interface WebEntitiesRetrieve {
  businessprocessflowinstances: WebMappingRetrieve<BusinessProcessFlowInstance_Select,BusinessProcessFlowInstance_Expand,BusinessProcessFlowInstance_Filter,BusinessProcessFlowInstance_Fixed,BusinessProcessFlowInstance_Result,BusinessProcessFlowInstance_FormattedResult>;
}
interface WebEntitiesRelated {
  businessprocessflowinstances: WebMappingRelated<BusinessProcessFlowInstance_RelatedOne,BusinessProcessFlowInstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  businessprocessflowinstances: WebMappingCUDA<BusinessProcessFlowInstance_Create,BusinessProcessFlowInstance_Update,BusinessProcessFlowInstance_Select>;
}

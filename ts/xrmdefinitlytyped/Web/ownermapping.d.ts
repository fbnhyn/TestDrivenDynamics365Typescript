interface OwnerMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  ownermappingid?: string | null;
  ownermappingidunique?: string | null;
  processcode?: ownermapping_processcode | null;
  solutionid?: string | null;
  sourcesystemusername?: string | null;
  sourceuservalueforsourcecrmuserlink?: string | null;
  statecode?: ownermapping_statecode | null;
  statuscode?: ownermapping_statuscode | null;
  supportingsolutionid?: string | null;
  targetsystemuserdomainname?: string | null;
  targetuservalueforsourcecrmuserlink?: string | null;
}
interface OwnerMapping_Relationships {
  userentityinstancedata_ownermapping?: UserEntityInstanceData_Result[] | null;
}
interface OwnerMapping extends OwnerMapping_Base, OwnerMapping_Relationships {
  importmapid_bind$importmaps?: string | null;
  targetsystemuserid_bind$systemusers?: string | null;
}
interface OwnerMapping_Create extends OwnerMapping {
}
interface OwnerMapping_Update extends OwnerMapping {
}
interface OwnerMapping_Select {
  componentstate: WebAttribute<OwnerMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<OwnerMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<OwnerMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OwnerMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importmapid_guid: WebAttribute<OwnerMapping_Select, { importmapid_guid: string | null }, { importmapid_formatted?: string }>;
  introducedversion: WebAttribute<OwnerMapping_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<OwnerMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<OwnerMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<OwnerMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OwnerMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<OwnerMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownermappingid: WebAttribute<OwnerMapping_Select, { ownermappingid: string | null }, {  }>;
  ownermappingidunique: WebAttribute<OwnerMapping_Select, { ownermappingidunique: string | null }, {  }>;
  processcode: WebAttribute<OwnerMapping_Select, { processcode: ownermapping_processcode | null }, { processcode_formatted?: string }>;
  solutionid: WebAttribute<OwnerMapping_Select, { solutionid: string | null }, {  }>;
  sourcesystemusername: WebAttribute<OwnerMapping_Select, { sourcesystemusername: string | null }, {  }>;
  sourceuservalueforsourcecrmuserlink: WebAttribute<OwnerMapping_Select, { sourceuservalueforsourcecrmuserlink: string | null }, {  }>;
  statecode: WebAttribute<OwnerMapping_Select, { statecode: ownermapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<OwnerMapping_Select, { statuscode: ownermapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<OwnerMapping_Select, { supportingsolutionid: string | null }, {  }>;
  targetsystemuserdomainname: WebAttribute<OwnerMapping_Select, { targetsystemuserdomainname: string | null }, {  }>;
  targetsystemuserid_guid: WebAttribute<OwnerMapping_Select, { targetsystemuserid_guid: string | null }, { targetsystemuserid_formatted?: string }>;
  targetuservalueforsourcecrmuserlink: WebAttribute<OwnerMapping_Select, { targetuservalueforsourcecrmuserlink: string | null }, {  }>;
}
interface OwnerMapping_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importmapid_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  ownermappingid: XQW.Guid;
  ownermappingidunique: XQW.Guid;
  processcode: ownermapping_processcode;
  solutionid: XQW.Guid;
  sourcesystemusername: string;
  sourceuservalueforsourcecrmuserlink: string;
  statecode: ownermapping_statecode;
  statuscode: ownermapping_statuscode;
  supportingsolutionid: XQW.Guid;
  targetsystemuserdomainname: string;
  targetsystemuserid_guid: XQW.Guid;
  targetuservalueforsourcecrmuserlink: string;
}
interface OwnerMapping_Expand {
  createdby: WebExpand<OwnerMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<OwnerMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importmapid: WebExpand<OwnerMapping_Expand, ImportMap_Select, ImportMap_Filter, { importmapid: ImportMap_Result }>;
  modifiedby: WebExpand<OwnerMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<OwnerMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  targetsystemuserid: WebExpand<OwnerMapping_Expand, SystemUser_Select, SystemUser_Filter, { targetsystemuserid: SystemUser_Result }>;
  userentityinstancedata_ownermapping: WebExpand<OwnerMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ownermapping: UserEntityInstanceData_Result[] }>;
}
interface OwnerMapping_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  importmapid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  processcode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  targetsystemuserid_formatted?: string;
}
interface OwnerMapping_Result extends OwnerMapping_Base, OwnerMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importmapid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  targetsystemuserid_guid: string | null;
}
interface OwnerMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importmapid: WebMappingRetrieve<ImportMap_Select,ImportMap_Expand,ImportMap_Filter,ImportMap_Fixed,ImportMap_Result,ImportMap_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  targetsystemuserid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface OwnerMapping_RelatedMany {
  userentityinstancedata_ownermapping: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ownermappings: WebMappingRetrieve<OwnerMapping_Select,OwnerMapping_Expand,OwnerMapping_Filter,OwnerMapping_Fixed,OwnerMapping_Result,OwnerMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  ownermappings: WebMappingRelated<OwnerMapping_RelatedOne,OwnerMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  ownermappings: WebMappingCUDA<OwnerMapping_Create,OwnerMapping_Update,OwnerMapping_Select>;
}

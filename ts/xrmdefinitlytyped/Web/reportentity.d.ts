interface ReportEntity_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  isfilterable?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  objecttypecode?: string | null;
  overwritetime?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  reportentityid?: string | null;
  reportentityidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ReportEntity_Relationships {
  userentityinstancedata_reportentity?: UserEntityInstanceData_Result[] | null;
}
interface ReportEntity extends ReportEntity_Base, ReportEntity_Relationships {
  reportid_bind$reports?: string | null;
}
interface ReportEntity_Create extends ReportEntity {
}
interface ReportEntity_Update extends ReportEntity {
}
interface ReportEntity_Select {
  componentstate: WebAttribute<ReportEntity_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ReportEntity_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ReportEntity_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ReportEntity_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ReportEntity_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ReportEntity_Select, { iscustomizable: any | null }, {  }>;
  isfilterable: WebAttribute<ReportEntity_Select, { isfilterable: boolean | null }, {  }>;
  ismanaged: WebAttribute<ReportEntity_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ReportEntity_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ReportEntity_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ReportEntity_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objecttypecode: WebAttribute<ReportEntity_Select, { objecttypecode: string | null }, {  }>;
  overwritetime: WebAttribute<ReportEntity_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ReportEntity_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ReportEntity_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ReportEntity_Select, { owninguser: string | null }, {  }>;
  reportentityid: WebAttribute<ReportEntity_Select, { reportentityid: string | null }, {  }>;
  reportentityidunique: WebAttribute<ReportEntity_Select, { reportentityidunique: string | null }, {  }>;
  reportid_guid: WebAttribute<ReportEntity_Select, { reportid_guid: string | null }, { reportid_formatted?: string }>;
  solutionid: WebAttribute<ReportEntity_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ReportEntity_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ReportEntity_Select, { versionnumber: number | null }, {  }>;
}
interface ReportEntity_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  isfilterable: boolean;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objecttypecode: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  reportentityid: XQW.Guid;
  reportentityidunique: XQW.Guid;
  reportid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ReportEntity_Expand {
  createdby: WebExpand<ReportEntity_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ReportEntity_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ReportEntity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ReportEntity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  reportid: WebExpand<ReportEntity_Expand, Report_Select, Report_Filter, { reportid: Report_Result }>;
  userentityinstancedata_reportentity: WebExpand<ReportEntity_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_reportentity: UserEntityInstanceData_Result[] }>;
}
interface ReportEntity_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  reportid_formatted?: string;
}
interface ReportEntity_Result extends ReportEntity_Base, ReportEntity_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  reportid_guid: string | null;
}
interface ReportEntity_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  reportid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
}
interface ReportEntity_RelatedMany {
  userentityinstancedata_reportentity: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  reportentities: WebMappingRetrieve<ReportEntity_Select,ReportEntity_Expand,ReportEntity_Filter,ReportEntity_Fixed,ReportEntity_Result,ReportEntity_FormattedResult>;
}
interface WebEntitiesRelated {
  reportentities: WebMappingRelated<ReportEntity_RelatedOne,ReportEntity_RelatedMany>;
}
interface WebEntitiesCUDA {
  reportentities: WebMappingCUDA<ReportEntity_Create,ReportEntity_Update,ReportEntity_Select>;
}

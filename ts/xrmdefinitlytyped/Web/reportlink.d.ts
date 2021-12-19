interface ReportLink_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  linkedreportname?: string | null;
  linktypecode?: reportlink_linktypecode | null;
  modifiedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  reportlinkid?: string | null;
  reportlinkidunique?: string | null;
  versionnumber?: number | null;
}
interface ReportLink_Relationships {
  userentityinstancedata_reportlink?: UserEntityInstanceData_Result[] | null;
}
interface ReportLink extends ReportLink_Base, ReportLink_Relationships {
  linkedreportid_bind$reports?: string | null;
  reportid_bind$reports?: string | null;
}
interface ReportLink_Create extends ReportLink {
}
interface ReportLink_Update extends ReportLink {
}
interface ReportLink_Select {
  createdby_guid: WebAttribute<ReportLink_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ReportLink_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ReportLink_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ReportLink_Select, { importsequencenumber: number | null }, {  }>;
  linkedreportid_guid: WebAttribute<ReportLink_Select, { linkedreportid_guid: string | null }, { linkedreportid_formatted?: string }>;
  linkedreportname: WebAttribute<ReportLink_Select, { linkedreportname: string | null }, {  }>;
  linktypecode: WebAttribute<ReportLink_Select, { linktypecode: reportlink_linktypecode | null }, { linktypecode_formatted?: string }>;
  modifiedby_guid: WebAttribute<ReportLink_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ReportLink_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ReportLink_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<ReportLink_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ReportLink_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ReportLink_Select, { owninguser: string | null }, {  }>;
  reportid_guid: WebAttribute<ReportLink_Select, { reportid_guid: string | null }, { reportid_formatted?: string }>;
  reportlinkid: WebAttribute<ReportLink_Select, { reportlinkid: string | null }, {  }>;
  reportlinkidunique: WebAttribute<ReportLink_Select, { reportlinkidunique: string | null }, {  }>;
  versionnumber: WebAttribute<ReportLink_Select, { versionnumber: number | null }, {  }>;
}
interface ReportLink_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  linkedreportid_guid: XQW.Guid;
  linkedreportname: string;
  linktypecode: reportlink_linktypecode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  reportid_guid: XQW.Guid;
  reportlinkid: XQW.Guid;
  reportlinkidunique: XQW.Guid;
  versionnumber: number;
}
interface ReportLink_Expand {
  createdby: WebExpand<ReportLink_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ReportLink_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  linkedreportid: WebExpand<ReportLink_Expand, Report_Select, Report_Filter, { linkedreportid: Report_Result }>;
  modifiedby: WebExpand<ReportLink_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ReportLink_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  reportid: WebExpand<ReportLink_Expand, Report_Select, Report_Filter, { reportid: Report_Result }>;
  userentityinstancedata_reportlink: WebExpand<ReportLink_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_reportlink: UserEntityInstanceData_Result[] }>;
}
interface ReportLink_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  linkedreportid_formatted?: string;
  linktypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  reportid_formatted?: string;
}
interface ReportLink_Result extends ReportLink_Base, ReportLink_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  linkedreportid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  reportid_guid: string | null;
}
interface ReportLink_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  linkedreportid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  reportid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
}
interface ReportLink_RelatedMany {
  userentityinstancedata_reportlink: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  reportlinks: WebMappingRetrieve<ReportLink_Select,ReportLink_Expand,ReportLink_Filter,ReportLink_Fixed,ReportLink_Result,ReportLink_FormattedResult>;
}
interface WebEntitiesRelated {
  reportlinks: WebMappingRelated<ReportLink_RelatedOne,ReportLink_RelatedMany>;
}
interface WebEntitiesCUDA {
  reportlinks: WebMappingCUDA<ReportLink_Create,ReportLink_Update,ReportLink_Select>;
}

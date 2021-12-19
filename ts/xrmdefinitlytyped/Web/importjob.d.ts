interface ImportJob_Base extends WebEntity {
  completedon?: Date | null;
  createdon?: Date | null;
  data?: string | null;
  importcontext?: string | null;
  importjobid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  operationcontext?: string | null;
  progress?: number | null;
  solutionid?: string | null;
  solutionname?: string | null;
  startedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface ImportJob_Relationships {
  userentityinstancedata_importjob?: UserEntityInstanceData_Result[] | null;
}
interface ImportJob extends ImportJob_Base, ImportJob_Relationships {
}
interface ImportJob_Create extends ImportJob {
}
interface ImportJob_Update extends ImportJob {
}
interface ImportJob_Select {
  completedon: WebAttribute<ImportJob_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<ImportJob_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ImportJob_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ImportJob_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<ImportJob_Select, { data: string | null }, {  }>;
  importcontext: WebAttribute<ImportJob_Select, { importcontext: string | null }, {  }>;
  importjobid: WebAttribute<ImportJob_Select, { importjobid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ImportJob_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ImportJob_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ImportJob_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ImportJob_Select, { name: string | null }, {  }>;
  operationcontext: WebAttribute<ImportJob_Select, { operationcontext: string | null }, {  }>;
  organizationid_guid: WebAttribute<ImportJob_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  progress: WebAttribute<ImportJob_Select, { progress: number | null }, {  }>;
  solutionid: WebAttribute<ImportJob_Select, { solutionid: string | null }, {  }>;
  solutionname: WebAttribute<ImportJob_Select, { solutionname: string | null }, {  }>;
  startedon: WebAttribute<ImportJob_Select, { startedon: Date | null }, { startedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ImportJob_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ImportJob_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface ImportJob_Filter {
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  importcontext: string;
  importjobid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  operationcontext: string;
  organizationid_guid: XQW.Guid;
  progress: number;
  solutionid: XQW.Guid;
  solutionname: string;
  startedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface ImportJob_Expand {
  createdby: WebExpand<ImportJob_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ImportJob_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ImportJob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ImportJob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ImportJob_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_importjob: WebExpand<ImportJob_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_importjob: UserEntityInstanceData_Result[] }>;
}
interface ImportJob_FormattedResult {
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  startedon_formatted?: string;
}
interface ImportJob_Result extends ImportJob_Base, ImportJob_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ImportJob_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ImportJob_RelatedMany {
  userentityinstancedata_importjob: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  importjobs: WebMappingRetrieve<ImportJob_Select,ImportJob_Expand,ImportJob_Filter,ImportJob_Fixed,ImportJob_Result,ImportJob_FormattedResult>;
}
interface WebEntitiesRelated {
  importjobs: WebMappingRelated<ImportJob_RelatedOne,ImportJob_RelatedMany>;
}
interface WebEntitiesCUDA {
  importjobs: WebMappingCUDA<ImportJob_Create,ImportJob_Update,ImportJob_Select>;
}

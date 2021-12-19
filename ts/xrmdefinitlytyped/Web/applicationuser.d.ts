interface ApplicationUser_Base extends WebEntity {
  applicationid?: string | null;
  applicationname?: string | null;
  applicationtype?: applicationuser_applicationtype | null;
  applicationuserid?: string | null;
  canimpersonateassystemuser?: boolean | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: applicationuser_statecode | null;
  statuscode?: applicationuser_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ApplicationUser_Relationships {
  applicationuser_AsyncOperations?: AsyncOperation_Result[] | null;
  applicationuser_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  applicationuser_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  applicationuser_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  applicationuser_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  applicationuser_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  applicationuser_ProcessSession?: ProcessSession_Result[] | null;
  applicationuser_SyncErrors?: SyncError_Result[] | null;
  applicationuser_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  applicationuserprofile?: FieldSecurityProfile_Result[] | null;
  applicationuserrole?: Role_Result[] | null;
}
interface ApplicationUser extends ApplicationUser_Base, ApplicationUser_Relationships {
  businessunitid_bind$businessunits?: string | null;
}
interface ApplicationUser_Create extends ApplicationUser {
}
interface ApplicationUser_Update extends ApplicationUser {
}
interface ApplicationUser_Select {
  applicationid: WebAttribute<ApplicationUser_Select, { applicationid: string | null }, {  }>;
  applicationname: WebAttribute<ApplicationUser_Select, { applicationname: string | null }, {  }>;
  applicationtype: WebAttribute<ApplicationUser_Select, { applicationtype: applicationuser_applicationtype | null }, { applicationtype_formatted?: string }>;
  applicationuserid: WebAttribute<ApplicationUser_Select, { applicationuserid: string | null }, {  }>;
  businessunitid_guid: WebAttribute<ApplicationUser_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  canimpersonateassystemuser: WebAttribute<ApplicationUser_Select, { canimpersonateassystemuser: boolean | null }, {  }>;
  componentidunique: WebAttribute<ApplicationUser_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<ApplicationUser_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ApplicationUser_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ApplicationUser_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ApplicationUser_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ApplicationUser_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ApplicationUser_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ApplicationUser_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ApplicationUser_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ApplicationUser_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ApplicationUser_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ApplicationUser_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ApplicationUser_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<ApplicationUser_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ApplicationUser_Select, { statecode: applicationuser_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ApplicationUser_Select, { statuscode: applicationuser_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ApplicationUser_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ApplicationUser_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ApplicationUser_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ApplicationUser_Select, { versionnumber: number | null }, {  }>;
}
interface ApplicationUser_Filter {
  applicationid: XQW.Guid;
  applicationname: string;
  applicationtype: applicationuser_applicationtype;
  applicationuserid: XQW.Guid;
  businessunitid_guid: XQW.Guid;
  canimpersonateassystemuser: boolean;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: applicationuser_statecode;
  statuscode: applicationuser_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ApplicationUser_Expand {
  applicationuser_AsyncOperations: WebExpand<ApplicationUser_Expand, AsyncOperation_Select, AsyncOperation_Filter, { applicationuser_AsyncOperations: AsyncOperation_Result[] }>;
  applicationuser_BulkDeleteFailures: WebExpand<ApplicationUser_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { applicationuser_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  applicationuser_DuplicateBaseRecord: WebExpand<ApplicationUser_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { applicationuser_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  applicationuser_DuplicateMatchingRecord: WebExpand<ApplicationUser_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { applicationuser_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  applicationuser_MailboxTrackingFolders: WebExpand<ApplicationUser_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { applicationuser_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  applicationuser_PrincipalObjectAttributeAccesses: WebExpand<ApplicationUser_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { applicationuser_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  applicationuser_ProcessSession: WebExpand<ApplicationUser_Expand, ProcessSession_Select, ProcessSession_Filter, { applicationuser_ProcessSession: ProcessSession_Result[] }>;
  applicationuser_SyncErrors: WebExpand<ApplicationUser_Expand, SyncError_Select, SyncError_Filter, { applicationuser_SyncErrors: SyncError_Result[] }>;
  applicationuser_UserEntityInstanceDatas: WebExpand<ApplicationUser_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { applicationuser_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  applicationuserprofile: WebExpand<ApplicationUser_Expand, FieldSecurityProfile_Select, FieldSecurityProfile_Filter, { applicationuserprofile: FieldSecurityProfile_Result[] }>;
  applicationuserrole: WebExpand<ApplicationUser_Expand, Role_Select, Role_Filter, { applicationuserrole: Role_Result[] }>;
  businessunitid: WebExpand<ApplicationUser_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  createdby: WebExpand<ApplicationUser_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ApplicationUser_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ApplicationUser_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ApplicationUser_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
}
interface ApplicationUser_FormattedResult {
  applicationtype_formatted?: string;
  businessunitid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ApplicationUser_Result extends ApplicationUser_Base, ApplicationUser_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface ApplicationUser_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ApplicationUser_RelatedMany {
  applicationuser_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  applicationuser_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  applicationuser_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  applicationuser_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  applicationuser_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  applicationuser_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  applicationuser_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  applicationuser_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  applicationuser_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  applicationuserprofile: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
  applicationuserrole: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
}
interface WebEntitiesRetrieve {
  applicationusers: WebMappingRetrieve<ApplicationUser_Select,ApplicationUser_Expand,ApplicationUser_Filter,ApplicationUser_Fixed,ApplicationUser_Result,ApplicationUser_FormattedResult>;
}
interface WebEntitiesRelated {
  applicationusers: WebMappingRelated<ApplicationUser_RelatedOne,ApplicationUser_RelatedMany>;
}
interface WebEntitiesCUDA {
  applicationusers: WebMappingCUDA<ApplicationUser_Create,ApplicationUser_Update,ApplicationUser_Select>;
}

interface msdyn_projectteammembersignup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_membershipstatus?: msdyn_projectteammembersignup_msdyn_membershipstatus | null;
  msdyn_name?: string | null;
  msdyn_projectteammembersignupid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projectteammembersignup_statecode | null;
  statuscode?: msdyn_projectteammembersignup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projectteammembersignup_Relationships {
  msdyn_BookableResource?: BookableResource_Result | null;
  msdyn_TeamMembership?: msdyn_projectteam_Result | null;
  msdyn_projectteammembersignup_Annotations?: Annotation_Result[] | null;
  msdyn_projectteammembersignup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projectteammembersignup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projectteammembersignup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectteammembersignup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectteammembersignup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projectteammembersignup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projectteammembersignup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projectteammembersignup_SyncErrors?: SyncError_Result[] | null;
  msdyn_projectteammembersignup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projectteammembersignup extends msdyn_projectteammembersignup_Base, msdyn_projectteammembersignup_Relationships {
  msdyn_BookableResource_bind$bookableresources?: string | null;
  msdyn_TeamMembership_bind$msdyn_projectteams?: string | null;
}
interface msdyn_projectteammembersignup_Create extends msdyn_projectteammembersignup {
}
interface msdyn_projectteammembersignup_Update extends msdyn_projectteammembersignup {
}
interface msdyn_projectteammembersignup_Select {
  createdby_guid: WebAttribute<msdyn_projectteammembersignup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projectteammembersignup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projectteammembersignup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projectteammembersignup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projectteammembersignup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projectteammembersignup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projectteammembersignup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_projectteammembersignup_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_membershipstatus: WebAttribute<msdyn_projectteammembersignup_Select, { msdyn_membershipstatus: msdyn_projectteammembersignup_msdyn_membershipstatus | null }, { msdyn_membershipstatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_projectteammembersignup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_projectteammembersignupid: WebAttribute<msdyn_projectteammembersignup_Select, { msdyn_projectteammembersignupid: string | null }, {  }>;
  msdyn_teammembership_guid: WebAttribute<msdyn_projectteammembersignup_Select, { msdyn_teammembership_guid: string | null }, { msdyn_teammembership_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_projectteammembersignup_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_projectteammembersignup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_projectteammembersignup_Select, { statecode: msdyn_projectteammembersignup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projectteammembersignup_Select, { statuscode: msdyn_projectteammembersignup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projectteammembersignup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projectteammembersignup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projectteammembersignup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projectteammembersignup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_membershipstatus: msdyn_projectteammembersignup_msdyn_membershipstatus;
  msdyn_name: string;
  msdyn_projectteammembersignupid: XQW.Guid;
  msdyn_teammembership_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_projectteammembersignup_statecode;
  statuscode: msdyn_projectteammembersignup_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projectteammembersignup_Expand {
  createdby: WebExpand<msdyn_projectteammembersignup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projectteammembersignup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projectteammembersignup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projectteammembersignup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_BookableResource: WebExpand<msdyn_projectteammembersignup_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_BookableResource: BookableResource_Result }>;
  msdyn_TeamMembership: WebExpand<msdyn_projectteammembersignup_Expand, msdyn_projectteam_Select, msdyn_projectteam_Filter, { msdyn_TeamMembership: msdyn_projectteam_Result }>;
  msdyn_projectteammembersignup_Annotations: WebExpand<msdyn_projectteammembersignup_Expand, Annotation_Select, Annotation_Filter, { msdyn_projectteammembersignup_Annotations: Annotation_Result[] }>;
  msdyn_projectteammembersignup_AsyncOperations: WebExpand<msdyn_projectteammembersignup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projectteammembersignup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projectteammembersignup_BulkDeleteFailures: WebExpand<msdyn_projectteammembersignup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projectteammembersignup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projectteammembersignup_DuplicateBaseRecord: WebExpand<msdyn_projectteammembersignup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectteammembersignup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projectteammembersignup_DuplicateMatchingRecord: WebExpand<msdyn_projectteammembersignup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectteammembersignup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projectteammembersignup_MailboxTrackingFolders: WebExpand<msdyn_projectteammembersignup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projectteammembersignup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projectteammembersignup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projectteammembersignup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projectteammembersignup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projectteammembersignup_ProcessSession: WebExpand<msdyn_projectteammembersignup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projectteammembersignup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projectteammembersignup_SyncErrors: WebExpand<msdyn_projectteammembersignup_Expand, SyncError_Select, SyncError_Filter, { msdyn_projectteammembersignup_SyncErrors: SyncError_Result[] }>;
  msdyn_projectteammembersignup_UserEntityInstanceDatas: WebExpand<msdyn_projectteammembersignup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projectteammembersignup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_projectteammembersignup_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_projectteammembersignup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_membershipstatus_formatted?: string;
  msdyn_teammembership_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projectteammembersignup_Result extends msdyn_projectteammembersignup_Base, msdyn_projectteammembersignup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_teammembership_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_projectteammembersignup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_BookableResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_TeamMembership: WebMappingRetrieve<msdyn_projectteam_Select,msdyn_projectteam_Expand,msdyn_projectteam_Filter,msdyn_projectteam_Fixed,msdyn_projectteam_Result,msdyn_projectteam_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_projectteammembersignup_RelatedMany {
  msdyn_projectteammembersignup_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projectteammembersignup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projectteammembersignup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projectteammembersignup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectteammembersignup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectteammembersignup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projectteammembersignup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projectteammembersignup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projectteammembersignup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projectteammembersignup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projectteammembersignups: WebMappingRetrieve<msdyn_projectteammembersignup_Select,msdyn_projectteammembersignup_Expand,msdyn_projectteammembersignup_Filter,msdyn_projectteammembersignup_Fixed,msdyn_projectteammembersignup_Result,msdyn_projectteammembersignup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projectteammembersignups: WebMappingRelated<msdyn_projectteammembersignup_RelatedOne,msdyn_projectteammembersignup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projectteammembersignups: WebMappingCUDA<msdyn_projectteammembersignup_Create,msdyn_projectteammembersignup_Update,msdyn_projectteammembersignup_Select>;
}

interface msdyn_taxcodedetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  msdyn_taxcodedetailid?: string | null;
  msdyn_taxontax?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_taxcodedetail_statecode | null;
  statuscode?: msdyn_taxcodedetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_taxcodedetail_Relationships {
  msdyn_taxcodedetail_Annotations?: Annotation_Result[] | null;
  msdyn_taxcodedetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_taxcodedetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_taxcodedetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_taxcodedetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_taxcodedetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_taxcodedetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_taxcodedetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_taxcodedetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_taxcodedetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_taxcodedetail extends msdyn_taxcodedetail_Base, msdyn_taxcodedetail_Relationships {
  msdyn_parenttaxcode_bind$msdyn_taxcodes?: string | null;
  msdyn_taxcode_bind$msdyn_taxcodes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_taxcodedetail_Create extends msdyn_taxcodedetail {
}
interface msdyn_taxcodedetail_Update extends msdyn_taxcodedetail {
}
interface msdyn_taxcodedetail_Select {
  createdby_guid: WebAttribute<msdyn_taxcodedetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_taxcodedetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_taxcodedetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_taxcodedetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_taxcodedetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_taxcodedetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_taxcodedetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_lineorder: WebAttribute<msdyn_taxcodedetail_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_taxcodedetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parenttaxcode_guid: WebAttribute<msdyn_taxcodedetail_Select, { msdyn_parenttaxcode_guid: string | null }, { msdyn_parenttaxcode_formatted?: string }>;
  msdyn_taxcode_guid: WebAttribute<msdyn_taxcodedetail_Select, { msdyn_taxcode_guid: string | null }, { msdyn_taxcode_formatted?: string }>;
  msdyn_taxcodedetailid: WebAttribute<msdyn_taxcodedetail_Select, { msdyn_taxcodedetailid: string | null }, {  }>;
  msdyn_taxontax: WebAttribute<msdyn_taxcodedetail_Select, { msdyn_taxontax: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_taxcodedetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_taxcodedetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_taxcodedetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_taxcodedetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_taxcodedetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_taxcodedetail_Select, { statecode: msdyn_taxcodedetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_taxcodedetail_Select, { statuscode: msdyn_taxcodedetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_taxcodedetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_taxcodedetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_taxcodedetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_taxcodedetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_parenttaxcode_guid: XQW.Guid;
  msdyn_taxcode_guid: XQW.Guid;
  msdyn_taxcodedetailid: XQW.Guid;
  msdyn_taxontax: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_taxcodedetail_statecode;
  statuscode: msdyn_taxcodedetail_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_taxcodedetail_Expand {
  createdby: WebExpand<msdyn_taxcodedetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_taxcodedetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_taxcodedetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_taxcodedetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_parenttaxcode: WebExpand<msdyn_taxcodedetail_Expand, msdyn_taxcode_Select, msdyn_taxcode_Filter, { msdyn_parenttaxcode: msdyn_taxcode_Result }>;
  msdyn_taxcode: WebExpand<msdyn_taxcodedetail_Expand, msdyn_taxcode_Select, msdyn_taxcode_Filter, { msdyn_taxcode: msdyn_taxcode_Result }>;
  msdyn_taxcodedetail_Annotations: WebExpand<msdyn_taxcodedetail_Expand, Annotation_Select, Annotation_Filter, { msdyn_taxcodedetail_Annotations: Annotation_Result[] }>;
  msdyn_taxcodedetail_AsyncOperations: WebExpand<msdyn_taxcodedetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_taxcodedetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_taxcodedetail_BulkDeleteFailures: WebExpand<msdyn_taxcodedetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_taxcodedetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_taxcodedetail_DuplicateBaseRecord: WebExpand<msdyn_taxcodedetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_taxcodedetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_taxcodedetail_DuplicateMatchingRecord: WebExpand<msdyn_taxcodedetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_taxcodedetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_taxcodedetail_MailboxTrackingFolders: WebExpand<msdyn_taxcodedetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_taxcodedetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_taxcodedetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_taxcodedetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_taxcodedetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_taxcodedetail_ProcessSession: WebExpand<msdyn_taxcodedetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_taxcodedetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_taxcodedetail_SyncErrors: WebExpand<msdyn_taxcodedetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_taxcodedetail_SyncErrors: SyncError_Result[] }>;
  msdyn_taxcodedetail_UserEntityInstanceDatas: WebExpand<msdyn_taxcodedetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_taxcodedetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_taxcodedetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_taxcodedetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_taxcodedetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_taxcodedetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_taxcodedetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_parenttaxcode_formatted?: string;
  msdyn_taxcode_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_taxcodedetail_Result extends msdyn_taxcodedetail_Base, msdyn_taxcodedetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parenttaxcode_guid: string | null;
  msdyn_taxcode_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_taxcodedetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_parenttaxcode: WebMappingRetrieve<msdyn_taxcode_Select,msdyn_taxcode_Expand,msdyn_taxcode_Filter,msdyn_taxcode_Fixed,msdyn_taxcode_Result,msdyn_taxcode_FormattedResult>;
  msdyn_taxcode: WebMappingRetrieve<msdyn_taxcode_Select,msdyn_taxcode_Expand,msdyn_taxcode_Filter,msdyn_taxcode_Fixed,msdyn_taxcode_Result,msdyn_taxcode_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_taxcodedetail_RelatedMany {
  msdyn_taxcodedetail_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_taxcodedetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_taxcodedetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_taxcodedetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_taxcodedetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_taxcodedetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_taxcodedetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_taxcodedetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_taxcodedetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_taxcodedetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_taxcodedetails: WebMappingRetrieve<msdyn_taxcodedetail_Select,msdyn_taxcodedetail_Expand,msdyn_taxcodedetail_Filter,msdyn_taxcodedetail_Fixed,msdyn_taxcodedetail_Result,msdyn_taxcodedetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_taxcodedetails: WebMappingRelated<msdyn_taxcodedetail_RelatedOne,msdyn_taxcodedetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_taxcodedetails: WebMappingCUDA<msdyn_taxcodedetail_Create,msdyn_taxcodedetail_Update,msdyn_taxcodedetail_Select>;
}

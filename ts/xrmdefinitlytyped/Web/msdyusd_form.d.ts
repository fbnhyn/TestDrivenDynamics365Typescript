interface msdyusd_form_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_formid?: string | null;
  msdyusd_markup?: string | null;
  msdyusd_name?: string | null;
  msdyusd_order?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_form_statecode | null;
  statuscode?: msdyusd_form_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_form_Relationships {
  msdyusd_configuration_form?: msdyusd_configuration_Result[] | null;
  msdyusd_form_Annotations?: Annotation_Result[] | null;
  msdyusd_form_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_form_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_form_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_form_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_form_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_form_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_form_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_form_SyncErrors?: SyncError_Result[] | null;
  msdyusd_form_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_form_hostedapplication?: UII_hostedapplication_Result[] | null;
}
interface msdyusd_form extends msdyusd_form_Base, msdyusd_form_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_form_Create extends msdyusd_form {
}
interface msdyusd_form_Update extends msdyusd_form {
}
interface msdyusd_form_Select {
  createdby_guid: WebAttribute<msdyusd_form_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_form_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_form_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_form_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_form_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_form_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_form_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_formid: WebAttribute<msdyusd_form_Select, { msdyusd_formid: string | null }, {  }>;
  msdyusd_markup: WebAttribute<msdyusd_form_Select, { msdyusd_markup: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_form_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_order: WebAttribute<msdyusd_form_Select, { msdyusd_order: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_form_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_form_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_form_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_form_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_form_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_form_Select, { statecode: msdyusd_form_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_form_Select, { statuscode: msdyusd_form_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_form_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_form_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_form_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_form_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_formid: XQW.Guid;
  msdyusd_markup: string;
  msdyusd_name: string;
  msdyusd_order: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_form_statecode;
  statuscode: msdyusd_form_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_form_Expand {
  createdby: WebExpand<msdyusd_form_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_form_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_form_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_form_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_configuration_form: WebExpand<msdyusd_form_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_form: msdyusd_configuration_Result[] }>;
  msdyusd_form_Annotations: WebExpand<msdyusd_form_Expand, Annotation_Select, Annotation_Filter, { msdyusd_form_Annotations: Annotation_Result[] }>;
  msdyusd_form_AsyncOperations: WebExpand<msdyusd_form_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_form_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_form_BulkDeleteFailures: WebExpand<msdyusd_form_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_form_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_form_DuplicateBaseRecord: WebExpand<msdyusd_form_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_form_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_form_DuplicateMatchingRecord: WebExpand<msdyusd_form_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_form_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_form_MailboxTrackingFolders: WebExpand<msdyusd_form_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_form_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_form_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_form_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_form_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_form_ProcessSession: WebExpand<msdyusd_form_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_form_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_form_SyncErrors: WebExpand<msdyusd_form_Expand, SyncError_Select, SyncError_Filter, { msdyusd_form_SyncErrors: SyncError_Result[] }>;
  msdyusd_form_UserEntityInstanceDatas: WebExpand<msdyusd_form_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_form_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_form_hostedapplication: WebExpand<msdyusd_form_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_form_hostedapplication: UII_hostedapplication_Result[] }>;
  ownerid: WebExpand<msdyusd_form_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_form_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_form_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_form_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_form_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_form_Result extends msdyusd_form_Base, msdyusd_form_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_form_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_form_RelatedMany {
  msdyusd_configuration_form: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_form_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_form_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_form_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_form_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_form_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_form_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_form_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_form_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_form_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_form_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_form_hostedapplication: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_forms: WebMappingRetrieve<msdyusd_form_Select,msdyusd_form_Expand,msdyusd_form_Filter,msdyusd_form_Fixed,msdyusd_form_Result,msdyusd_form_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_forms: WebMappingRelated<msdyusd_form_RelatedOne,msdyusd_form_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_forms: WebMappingCUDA<msdyusd_form_Create,msdyusd_form_Update,msdyusd_form_Select>;
}

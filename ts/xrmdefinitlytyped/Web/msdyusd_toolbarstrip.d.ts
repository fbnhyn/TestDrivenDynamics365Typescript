interface msdyusd_toolbarstrip_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_autoload?: msdyusd_toolbarstrip_msdyusd_autoload | null;
  msdyusd_customstyles?: string | null;
  msdyusd_enabledcondition?: string | null;
  msdyusd_name?: string | null;
  msdyusd_order?: number | null;
  msdyusd_title?: string | null;
  msdyusd_toolbarstripid?: string | null;
  msdyusd_visiblecondition?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_toolbarstrip_statecode | null;
  statuscode?: msdyusd_toolbarstrip_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_toolbarstrip_Relationships {
  msdyusd_configuration_toolbar?: msdyusd_configuration_Result[] | null;
  msdyusd_toolbarstrip_Annotations?: Annotation_Result[] | null;
  msdyusd_toolbarstrip_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_toolbarstrip_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_toolbarstrip_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_toolbarstrip_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_toolbarstrip_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_toolbarstrip_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_toolbarstrip_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_toolbarstrip_SyncErrors?: SyncError_Result[] | null;
  msdyusd_toolbarstrip_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_toolbarstrip_toolbarbutton?: msdyusd_toolbarbutton_Result[] | null;
  msdyusd_toolbarstrip_uii_hostedapplication?: UII_hostedapplication_Result[] | null;
}
interface msdyusd_toolbarstrip extends msdyusd_toolbarstrip_Base, msdyusd_toolbarstrip_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_toolbarstrip_Create extends msdyusd_toolbarstrip {
}
interface msdyusd_toolbarstrip_Update extends msdyusd_toolbarstrip {
}
interface msdyusd_toolbarstrip_Select {
  createdby_guid: WebAttribute<msdyusd_toolbarstrip_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_toolbarstrip_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_toolbarstrip_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_toolbarstrip_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_toolbarstrip_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_toolbarstrip_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_toolbarstrip_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_autoload: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_autoload: msdyusd_toolbarstrip_msdyusd_autoload | null }, { msdyusd_autoload_formatted?: string }>;
  msdyusd_customstyles: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_customstyles: string | null }, {  }>;
  msdyusd_enabledcondition: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_enabledcondition: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_order: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_order: number | null }, {  }>;
  msdyusd_title: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_title: string | null }, {  }>;
  msdyusd_toolbarstripid: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_toolbarstripid: string | null }, {  }>;
  msdyusd_visiblecondition: WebAttribute<msdyusd_toolbarstrip_Select, { msdyusd_visiblecondition: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_toolbarstrip_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_toolbarstrip_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_toolbarstrip_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_toolbarstrip_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_toolbarstrip_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_toolbarstrip_Select, { statecode: msdyusd_toolbarstrip_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_toolbarstrip_Select, { statuscode: msdyusd_toolbarstrip_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_toolbarstrip_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_toolbarstrip_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_toolbarstrip_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_toolbarstrip_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_autoload: msdyusd_toolbarstrip_msdyusd_autoload;
  msdyusd_customstyles: string;
  msdyusd_enabledcondition: string;
  msdyusd_name: string;
  msdyusd_order: number;
  msdyusd_title: string;
  msdyusd_toolbarstripid: XQW.Guid;
  msdyusd_visiblecondition: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_toolbarstrip_statecode;
  statuscode: msdyusd_toolbarstrip_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_toolbarstrip_Expand {
  createdby: WebExpand<msdyusd_toolbarstrip_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_toolbarstrip_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_toolbarstrip_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_toolbarstrip_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_configuration_toolbar: WebExpand<msdyusd_toolbarstrip_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_toolbar: msdyusd_configuration_Result[] }>;
  msdyusd_toolbarstrip_Annotations: WebExpand<msdyusd_toolbarstrip_Expand, Annotation_Select, Annotation_Filter, { msdyusd_toolbarstrip_Annotations: Annotation_Result[] }>;
  msdyusd_toolbarstrip_AsyncOperations: WebExpand<msdyusd_toolbarstrip_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_toolbarstrip_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_toolbarstrip_BulkDeleteFailures: WebExpand<msdyusd_toolbarstrip_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_toolbarstrip_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_toolbarstrip_DuplicateBaseRecord: WebExpand<msdyusd_toolbarstrip_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_toolbarstrip_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_toolbarstrip_DuplicateMatchingRecord: WebExpand<msdyusd_toolbarstrip_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_toolbarstrip_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_toolbarstrip_MailboxTrackingFolders: WebExpand<msdyusd_toolbarstrip_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_toolbarstrip_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_toolbarstrip_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_toolbarstrip_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_toolbarstrip_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_toolbarstrip_ProcessSession: WebExpand<msdyusd_toolbarstrip_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_toolbarstrip_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_toolbarstrip_SyncErrors: WebExpand<msdyusd_toolbarstrip_Expand, SyncError_Select, SyncError_Filter, { msdyusd_toolbarstrip_SyncErrors: SyncError_Result[] }>;
  msdyusd_toolbarstrip_UserEntityInstanceDatas: WebExpand<msdyusd_toolbarstrip_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_toolbarstrip_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_toolbarstrip_toolbarbutton: WebExpand<msdyusd_toolbarstrip_Expand, msdyusd_toolbarbutton_Select, msdyusd_toolbarbutton_Filter, { msdyusd_toolbarstrip_toolbarbutton: msdyusd_toolbarbutton_Result[] }>;
  msdyusd_toolbarstrip_uii_hostedapplication: WebExpand<msdyusd_toolbarstrip_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_toolbarstrip_uii_hostedapplication: UII_hostedapplication_Result[] }>;
  ownerid: WebExpand<msdyusd_toolbarstrip_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_toolbarstrip_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_toolbarstrip_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_toolbarstrip_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_toolbarstrip_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_autoload_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_toolbarstrip_Result extends msdyusd_toolbarstrip_Base, msdyusd_toolbarstrip_Relationships {
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
interface msdyusd_toolbarstrip_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_toolbarstrip_RelatedMany {
  msdyusd_configuration_toolbar: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_toolbarstrip_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_toolbarstrip_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_toolbarstrip_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_toolbarstrip_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_toolbarstrip_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_toolbarstrip_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_toolbarstrip_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_toolbarstrip_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_toolbarstrip_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_toolbarstrip_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_toolbarstrip_toolbarbutton: WebMappingRetrieve<msdyusd_toolbarbutton_Select,msdyusd_toolbarbutton_Expand,msdyusd_toolbarbutton_Filter,msdyusd_toolbarbutton_Fixed,msdyusd_toolbarbutton_Result,msdyusd_toolbarbutton_FormattedResult>;
  msdyusd_toolbarstrip_uii_hostedapplication: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_toolbarstrips: WebMappingRetrieve<msdyusd_toolbarstrip_Select,msdyusd_toolbarstrip_Expand,msdyusd_toolbarstrip_Filter,msdyusd_toolbarstrip_Fixed,msdyusd_toolbarstrip_Result,msdyusd_toolbarstrip_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_toolbarstrips: WebMappingRelated<msdyusd_toolbarstrip_RelatedOne,msdyusd_toolbarstrip_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_toolbarstrips: WebMappingCUDA<msdyusd_toolbarstrip_Create,msdyusd_toolbarstrip_Update,msdyusd_toolbarstrip_Select>;
}

interface msdyn_consoleapplicationsessiontemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_consoleapplicationsessiontemplateid?: string | null;
  msdyn_description?: string | null;
  msdyn_icon?: string | null;
  msdyn_ispanelhidden?: boolean | null;
  msdyn_name?: string | null;
  msdyn_panelstate?: msdyn_panestate | null;
  msdyn_pinned?: boolean | null;
  msdyn_renderingorder?: number | null;
  msdyn_title?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleapplicationsessiontemplate_statecode | null;
  statuscode?: msdyn_consoleapplicationsessiontemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleapplicationsessiontemplate_Relationships {
  msdyn_AnchorTab?: msdyn_consoleapplicationtemplate_Result | null;
  msdyn_consoleapplicationsessiontemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleapplicationsessiontemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationsessiontemp_tag?: msdyn_templatetags_Result[] | null;
  msdyn_msdyn_consoleapplicationsessiontemplate_m?: msdyn_consoleapplicationtemplate_Result[] | null;
  msdyn_msdyn_consoleapplicationsessiontemplate_msdyn_scenario_SessionTemplate?: msdyn_scenario_Result[] | null;
}
interface msdyn_consoleapplicationsessiontemplate extends msdyn_consoleapplicationsessiontemplate_Base, msdyn_consoleapplicationsessiontemplate_Relationships {
  msdyn_AnchorTab_bind$msdyn_consoleapplicationtemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_consoleapplicationsessiontemplate_Create extends msdyn_consoleapplicationsessiontemplate {
}
interface msdyn_consoleapplicationsessiontemplate_Update extends msdyn_consoleapplicationsessiontemplate {
}
interface msdyn_consoleapplicationsessiontemplate_Select {
  createdby_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_anchortab_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_anchortab_guid: string | null }, { msdyn_anchortab_formatted?: string }>;
  msdyn_consoleapplicationsessiontemplateid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_consoleapplicationsessiontemplateid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_icon: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_icon: string | null }, {  }>;
  msdyn_ispanelhidden: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_ispanelhidden: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_panelstate: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_panelstate: msdyn_panestate | null }, { msdyn_panelstate_formatted?: string }>;
  msdyn_pinned: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_pinned: boolean | null }, {  }>;
  msdyn_renderingorder: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_renderingorder: number | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { msdyn_title: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { statecode: msdyn_consoleapplicationsessiontemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { statuscode: msdyn_consoleapplicationsessiontemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleapplicationsessiontemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleapplicationsessiontemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_anchortab_guid: XQW.Guid;
  msdyn_consoleapplicationsessiontemplateid: XQW.Guid;
  msdyn_description: string;
  msdyn_icon: string;
  msdyn_ispanelhidden: boolean;
  msdyn_name: string;
  msdyn_panelstate: msdyn_panestate;
  msdyn_pinned: boolean;
  msdyn_renderingorder: number;
  msdyn_title: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_consoleapplicationsessiontemplate_statecode;
  statuscode: msdyn_consoleapplicationsessiontemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleapplicationsessiontemplate_Expand {
  createdby: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AnchorTab: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, msdyn_consoleapplicationtemplate_Select, msdyn_consoleapplicationtemplate_Filter, { msdyn_AnchorTab: msdyn_consoleapplicationtemplate_Result }>;
  msdyn_consoleapplicationsessiontemplate_AsyncOperations: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleapplicationsessiontemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_BulkDeleteFailures: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleapplicationsessiontemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_DuplicateBaseRecord: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationsessiontemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_DuplicateMatchingRecord: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationsessiontemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_MailboxTrackingFolders: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleapplicationsessiontemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleapplicationsessiontemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_ProcessSession: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleapplicationsessiontemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_SyncErrors: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleapplicationsessiontemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleapplicationsessiontemplate_UserEntityInstanceDatas: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleapplicationsessiontemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationsessiontemp_tag: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, msdyn_templatetags_Select, msdyn_templatetags_Filter, { msdyn_msdyn_consoleapplicationsessiontemp_tag: msdyn_templatetags_Result[] }>;
  msdyn_msdyn_consoleapplicationsessiontemplate_m: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, msdyn_consoleapplicationtemplate_Select, msdyn_consoleapplicationtemplate_Filter, { msdyn_msdyn_consoleapplicationsessiontemplate_m: msdyn_consoleapplicationtemplate_Result[] }>;
  msdyn_msdyn_consoleapplicationsessiontemplate_msdyn_scenario_SessionTemplate: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, msdyn_scenario_Select, msdyn_scenario_Filter, { msdyn_msdyn_consoleapplicationsessiontemplate_msdyn_scenario_SessionTemplate: msdyn_scenario_Result[] }>;
  ownerid: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_consoleapplicationsessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_consoleapplicationsessiontemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_anchortab_formatted?: string;
  msdyn_panelstate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_consoleapplicationsessiontemplate_Result extends msdyn_consoleapplicationsessiontemplate_Base, msdyn_consoleapplicationsessiontemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_anchortab_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_consoleapplicationsessiontemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AnchorTab: WebMappingRetrieve<msdyn_consoleapplicationtemplate_Select,msdyn_consoleapplicationtemplate_Expand,msdyn_consoleapplicationtemplate_Filter,msdyn_consoleapplicationtemplate_Fixed,msdyn_consoleapplicationtemplate_Result,msdyn_consoleapplicationtemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_consoleapplicationsessiontemplate_RelatedMany {
  msdyn_consoleapplicationsessiontemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleapplicationsessiontemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationsessiontemp_tag: WebMappingRetrieve<msdyn_templatetags_Select,msdyn_templatetags_Expand,msdyn_templatetags_Filter,msdyn_templatetags_Fixed,msdyn_templatetags_Result,msdyn_templatetags_FormattedResult>;
  msdyn_msdyn_consoleapplicationsessiontemplate_m: WebMappingRetrieve<msdyn_consoleapplicationtemplate_Select,msdyn_consoleapplicationtemplate_Expand,msdyn_consoleapplicationtemplate_Filter,msdyn_consoleapplicationtemplate_Fixed,msdyn_consoleapplicationtemplate_Result,msdyn_consoleapplicationtemplate_FormattedResult>;
  msdyn_msdyn_consoleapplicationsessiontemplate_msdyn_scenario_SessionTemplate: WebMappingRetrieve<msdyn_scenario_Select,msdyn_scenario_Expand,msdyn_scenario_Filter,msdyn_scenario_Fixed,msdyn_scenario_Result,msdyn_scenario_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleapplicationsessiontemplates: WebMappingRetrieve<msdyn_consoleapplicationsessiontemplate_Select,msdyn_consoleapplicationsessiontemplate_Expand,msdyn_consoleapplicationsessiontemplate_Filter,msdyn_consoleapplicationsessiontemplate_Fixed,msdyn_consoleapplicationsessiontemplate_Result,msdyn_consoleapplicationsessiontemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleapplicationsessiontemplates: WebMappingRelated<msdyn_consoleapplicationsessiontemplate_RelatedOne,msdyn_consoleapplicationsessiontemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleapplicationsessiontemplates: WebMappingCUDA<msdyn_consoleapplicationsessiontemplate_Create,msdyn_consoleapplicationsessiontemplate_Update,msdyn_consoleapplicationsessiontemplate_Select>;
}

interface msdyusd_toolbarbutton_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_buttontext?: string | null;
  msdyusd_enablecondition?: msdyusd_enabletrigger | null;
  msdyusd_enabledcondition?: string | null;
  msdyusd_image?: string | null;
  msdyusd_name?: string | null;
  msdyusd_order?: number | null;
  msdyusd_scriptcondition?: string | null;
  msdyusd_shortcutkey?: string | null;
  msdyusd_toolbarbuttonid?: string | null;
  msdyusd_tooltip?: string | null;
  msdyusd_visiblecondition?: string | null;
  msdyusd_webresourceurl?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_toolbarbutton_statecode | null;
  statuscode?: msdyusd_toolbarbutton_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_toolbarbutton_Relationships {
  msdyusd_Buttons?: msdyusd_toolbarbutton_Result | null;
  msdyusd_ToolbarId?: msdyusd_toolbarstrip_Result | null;
  msdyusd_toolbarbutton_Annotations?: Annotation_Result[] | null;
  msdyusd_toolbarbutton_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_toolbarbutton_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_toolbarbutton_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_toolbarbutton_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_toolbarbutton_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_toolbarbutton_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_toolbarbutton_SyncErrors?: SyncError_Result[] | null;
  msdyusd_toolbarbutton_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_toolbarbutton_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
  msdyusd_toolbarbutton_connections1?: Connection_Result[] | null;
  msdyusd_toolbarbutton_connections2?: Connection_Result[] | null;
  msdyusd_toolbarbutton_toolbarbutton_Buttons?: msdyusd_toolbarbutton_Result[] | null;
}
interface msdyusd_toolbarbutton extends msdyusd_toolbarbutton_Base, msdyusd_toolbarbutton_Relationships {
  msdyusd_Buttons_bind$msdyusd_toolbarbuttons?: string | null;
  msdyusd_ToolbarId_bind$msdyusd_toolbarstrips?: string | null;
  msdyusd_showtab_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_toolbarbutton_Create extends msdyusd_toolbarbutton {
}
interface msdyusd_toolbarbutton_Update extends msdyusd_toolbarbutton {
}
interface msdyusd_toolbarbutton_Select {
  createdby_guid: WebAttribute<msdyusd_toolbarbutton_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_toolbarbutton_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_toolbarbutton_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_toolbarbutton_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_toolbarbutton_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_toolbarbutton_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_toolbarbutton_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_buttons_guid: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_buttons_guid: string | null }, { msdyusd_buttons_formatted?: string }>;
  msdyusd_buttontext: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_buttontext: string | null }, {  }>;
  msdyusd_enablecondition: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_enablecondition: msdyusd_enabletrigger | null }, { msdyusd_enablecondition_formatted?: string }>;
  msdyusd_enabledcondition: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_enabledcondition: string | null }, {  }>;
  msdyusd_image: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_image: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_order: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_order: number | null }, {  }>;
  msdyusd_scriptcondition: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_scriptcondition: string | null }, {  }>;
  msdyusd_shortcutkey: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_shortcutkey: string | null }, {  }>;
  msdyusd_showtab_guid: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_showtab_guid: string | null }, { msdyusd_showtab_formatted?: string }>;
  msdyusd_toolbarbuttonid: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_toolbarbuttonid: string | null }, {  }>;
  msdyusd_toolbarid_guid: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_toolbarid_guid: string | null }, { msdyusd_toolbarid_formatted?: string }>;
  msdyusd_tooltip: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_tooltip: string | null }, {  }>;
  msdyusd_visiblecondition: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_visiblecondition: string | null }, {  }>;
  msdyusd_webresourceurl: WebAttribute<msdyusd_toolbarbutton_Select, { msdyusd_webresourceurl: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_toolbarbutton_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_toolbarbutton_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_toolbarbutton_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_toolbarbutton_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_toolbarbutton_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_toolbarbutton_Select, { statecode: msdyusd_toolbarbutton_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_toolbarbutton_Select, { statuscode: msdyusd_toolbarbutton_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_toolbarbutton_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_toolbarbutton_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_toolbarbutton_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_toolbarbutton_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_buttons_guid: XQW.Guid;
  msdyusd_buttontext: string;
  msdyusd_enablecondition: msdyusd_enabletrigger;
  msdyusd_enabledcondition: string;
  msdyusd_image: string;
  msdyusd_name: string;
  msdyusd_order: number;
  msdyusd_scriptcondition: string;
  msdyusd_shortcutkey: string;
  msdyusd_showtab_guid: XQW.Guid;
  msdyusd_toolbarbuttonid: XQW.Guid;
  msdyusd_toolbarid_guid: XQW.Guid;
  msdyusd_tooltip: string;
  msdyusd_visiblecondition: string;
  msdyusd_webresourceurl: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_toolbarbutton_statecode;
  statuscode: msdyusd_toolbarbutton_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_toolbarbutton_Expand {
  createdby: WebExpand<msdyusd_toolbarbutton_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_toolbarbutton_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_toolbarbutton_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_toolbarbutton_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_Buttons: WebExpand<msdyusd_toolbarbutton_Expand, msdyusd_toolbarbutton_Select, msdyusd_toolbarbutton_Filter, { msdyusd_Buttons: msdyusd_toolbarbutton_Result }>;
  msdyusd_ToolbarId: WebExpand<msdyusd_toolbarbutton_Expand, msdyusd_toolbarstrip_Select, msdyusd_toolbarstrip_Filter, { msdyusd_ToolbarId: msdyusd_toolbarstrip_Result }>;
  msdyusd_showtab: WebExpand<msdyusd_toolbarbutton_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_showtab: UII_hostedapplication_Result }>;
  msdyusd_toolbarbutton_Annotations: WebExpand<msdyusd_toolbarbutton_Expand, Annotation_Select, Annotation_Filter, { msdyusd_toolbarbutton_Annotations: Annotation_Result[] }>;
  msdyusd_toolbarbutton_AsyncOperations: WebExpand<msdyusd_toolbarbutton_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_toolbarbutton_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_toolbarbutton_BulkDeleteFailures: WebExpand<msdyusd_toolbarbutton_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_toolbarbutton_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_toolbarbutton_DuplicateBaseRecord: WebExpand<msdyusd_toolbarbutton_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_toolbarbutton_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_toolbarbutton_DuplicateMatchingRecord: WebExpand<msdyusd_toolbarbutton_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_toolbarbutton_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_toolbarbutton_MailboxTrackingFolders: WebExpand<msdyusd_toolbarbutton_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_toolbarbutton_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_toolbarbutton_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_toolbarbutton_ProcessSession: WebExpand<msdyusd_toolbarbutton_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_toolbarbutton_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_toolbarbutton_SyncErrors: WebExpand<msdyusd_toolbarbutton_Expand, SyncError_Select, SyncError_Filter, { msdyusd_toolbarbutton_SyncErrors: SyncError_Result[] }>;
  msdyusd_toolbarbutton_UserEntityInstanceDatas: WebExpand<msdyusd_toolbarbutton_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_toolbarbutton_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_toolbarbutton_agentscriptaction: WebExpand<msdyusd_toolbarbutton_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_toolbarbutton_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
  msdyusd_toolbarbutton_connections1: WebExpand<msdyusd_toolbarbutton_Expand, Connection_Select, Connection_Filter, { msdyusd_toolbarbutton_connections1: Connection_Result[] }>;
  msdyusd_toolbarbutton_connections2: WebExpand<msdyusd_toolbarbutton_Expand, Connection_Select, Connection_Filter, { msdyusd_toolbarbutton_connections2: Connection_Result[] }>;
  msdyusd_toolbarbutton_toolbarbutton_Buttons: WebExpand<msdyusd_toolbarbutton_Expand, msdyusd_toolbarbutton_Select, msdyusd_toolbarbutton_Filter, { msdyusd_toolbarbutton_toolbarbutton_Buttons: msdyusd_toolbarbutton_Result[] }>;
  ownerid: WebExpand<msdyusd_toolbarbutton_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_toolbarbutton_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_toolbarbutton_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_toolbarbutton_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_toolbarbutton_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_buttons_formatted?: string;
  msdyusd_enablecondition_formatted?: string;
  msdyusd_showtab_formatted?: string;
  msdyusd_toolbarid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_toolbarbutton_Result extends msdyusd_toolbarbutton_Base, msdyusd_toolbarbutton_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_buttons_guid: string | null;
  msdyusd_showtab_guid: string | null;
  msdyusd_toolbarid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_toolbarbutton_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_Buttons: WebMappingRetrieve<msdyusd_toolbarbutton_Select,msdyusd_toolbarbutton_Expand,msdyusd_toolbarbutton_Filter,msdyusd_toolbarbutton_Fixed,msdyusd_toolbarbutton_Result,msdyusd_toolbarbutton_FormattedResult>;
  msdyusd_ToolbarId: WebMappingRetrieve<msdyusd_toolbarstrip_Select,msdyusd_toolbarstrip_Expand,msdyusd_toolbarstrip_Filter,msdyusd_toolbarstrip_Fixed,msdyusd_toolbarstrip_Result,msdyusd_toolbarstrip_FormattedResult>;
  msdyusd_showtab: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_toolbarbutton_RelatedMany {
  msdyusd_toolbarbutton_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_toolbarbutton_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_toolbarbutton_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_toolbarbutton_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_toolbarbutton_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_toolbarbutton_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_toolbarbutton_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_toolbarbutton_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_toolbarbutton_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_toolbarbutton_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_toolbarbutton_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyusd_toolbarbutton_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyusd_toolbarbutton_toolbarbutton_Buttons: WebMappingRetrieve<msdyusd_toolbarbutton_Select,msdyusd_toolbarbutton_Expand,msdyusd_toolbarbutton_Filter,msdyusd_toolbarbutton_Fixed,msdyusd_toolbarbutton_Result,msdyusd_toolbarbutton_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_toolbarbuttons: WebMappingRetrieve<msdyusd_toolbarbutton_Select,msdyusd_toolbarbutton_Expand,msdyusd_toolbarbutton_Filter,msdyusd_toolbarbutton_Fixed,msdyusd_toolbarbutton_Result,msdyusd_toolbarbutton_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_toolbarbuttons: WebMappingRelated<msdyusd_toolbarbutton_RelatedOne,msdyusd_toolbarbutton_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_toolbarbuttons: WebMappingCUDA<msdyusd_toolbarbutton_Create,msdyusd_toolbarbutton_Update,msdyusd_toolbarbutton_Select>;
}

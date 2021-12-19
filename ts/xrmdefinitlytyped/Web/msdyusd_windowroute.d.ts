interface msdyusd_windowroute_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_action?: msdyusd_windowroute_msdyusd_action | null;
  msdyusd_condition?: string | null;
  msdyusd_dashboardframe?: string | null;
  msdyusd_destination?: msdyusd_windowroute_msdyusd_destination | null;
  msdyusd_direction?: msdyusd_windowroute_msdyusd_direction | null;
  msdyusd_field?: string | null;
  msdyusd_hidenavbar?: boolean | null;
  msdyusd_hideribbon?: boolean | null;
  msdyusd_loadarea?: string | null;
  msdyusd_multiplematchesdecision?: msdyusd_windowroute_msdyusd_multiplematchesdecision | null;
  msdyusd_name?: string | null;
  msdyusd_nomatchdecision?: msdyusd_windowroute_msdyusd_nomatchdecision | null;
  msdyusd_order?: number | null;
  msdyusd_routetype?: msdyusd_windowroute_msdyusd_routetype | null;
  msdyusd_singlematchdecision?: msdyusd_windowroute_msdyusd_singlematchdecision | null;
  msdyusd_sourceframe?: string | null;
  msdyusd_url?: string | null;
  msdyusd_windowrouteid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_windowroute_statecode | null;
  statuscode?: msdyusd_windowroute_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_windowroute_Relationships {
  msdyusd_Application?: UII_hostedapplication_Result | null;
  msdyusd_ApplicationAction?: msdyusd_agentscriptaction_Result | null;
  msdyusd_Entity?: msdyusd_entityassignment_Result | null;
  msdyusd_EntitySearch?: msdyusd_entitysearch_Result | null;
  msdyusd_From?: UII_hostedapplication_Result | null;
  msdyusd_FromSearch?: msdyusd_entitysearch_Result | null;
  msdyusd_InitiatingActivity?: msdyusd_entityassignment_Result | null;
  msdyusd_MultipleMatches?: msdyusd_agentscriptaction_Result | null;
  msdyusd_NoMatchesAction?: msdyusd_agentscriptaction_Result | null;
  msdyusd_SingleMatchAction?: msdyusd_agentscriptaction_Result | null;
  msdyusd_configuration_windowroute?: msdyusd_configuration_Result[] | null;
  msdyusd_windowroute_Annotations?: Annotation_Result[] | null;
  msdyusd_windowroute_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_windowroute_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_windowroute_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_windowroute_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_windowroute_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_windowroute_SyncErrors?: SyncError_Result[] | null;
  msdyusd_windowroute_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_windowroute_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
  msdyusd_windowroute_ctisearch?: msdyusd_search_Result[] | null;
}
interface msdyusd_windowroute extends msdyusd_windowroute_Base, msdyusd_windowroute_Relationships {
  msdyusd_ApplicationAction_bind$msdyusd_agentscriptactions?: string | null;
  msdyusd_Application_bind$uii_hostedapplications?: string | null;
  msdyusd_EntitySearch_bind$msdyusd_entitysearchs?: string | null;
  msdyusd_Entity_bind$msdyusd_entityassignments?: string | null;
  msdyusd_FromSearch_bind$msdyusd_entitysearchs?: string | null;
  msdyusd_From_bind$uii_hostedapplications?: string | null;
  msdyusd_InitiatingActivity_bind$msdyusd_entityassignments?: string | null;
  msdyusd_MultipleMatches_bind$msdyusd_agentscriptactions?: string | null;
  msdyusd_NoMatchesAction_bind$msdyusd_agentscriptactions?: string | null;
  msdyusd_SingleMatchAction_bind$msdyusd_agentscriptactions?: string | null;
  msdyusd_showtab_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_windowroute_Create extends msdyusd_windowroute {
}
interface msdyusd_windowroute_Update extends msdyusd_windowroute {
}
interface msdyusd_windowroute_Select {
  createdby_guid: WebAttribute<msdyusd_windowroute_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_windowroute_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_windowroute_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_windowroute_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_windowroute_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_windowroute_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_windowroute_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_action: WebAttribute<msdyusd_windowroute_Select, { msdyusd_action: msdyusd_windowroute_msdyusd_action | null }, { msdyusd_action_formatted?: string }>;
  msdyusd_application_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_application_guid: string | null }, { msdyusd_application_formatted?: string }>;
  msdyusd_applicationaction_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_applicationaction_guid: string | null }, { msdyusd_applicationaction_formatted?: string }>;
  msdyusd_condition: WebAttribute<msdyusd_windowroute_Select, { msdyusd_condition: string | null }, {  }>;
  msdyusd_dashboardframe: WebAttribute<msdyusd_windowroute_Select, { msdyusd_dashboardframe: string | null }, {  }>;
  msdyusd_destination: WebAttribute<msdyusd_windowroute_Select, { msdyusd_destination: msdyusd_windowroute_msdyusd_destination | null }, { msdyusd_destination_formatted?: string }>;
  msdyusd_direction: WebAttribute<msdyusd_windowroute_Select, { msdyusd_direction: msdyusd_windowroute_msdyusd_direction | null }, { msdyusd_direction_formatted?: string }>;
  msdyusd_entity_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_entity_guid: string | null }, { msdyusd_entity_formatted?: string }>;
  msdyusd_entitysearch_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_entitysearch_guid: string | null }, { msdyusd_entitysearch_formatted?: string }>;
  msdyusd_field: WebAttribute<msdyusd_windowroute_Select, { msdyusd_field: string | null }, {  }>;
  msdyusd_from_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_from_guid: string | null }, { msdyusd_from_formatted?: string }>;
  msdyusd_fromsearch_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_fromsearch_guid: string | null }, { msdyusd_fromsearch_formatted?: string }>;
  msdyusd_hidenavbar: WebAttribute<msdyusd_windowroute_Select, { msdyusd_hidenavbar: boolean | null }, {  }>;
  msdyusd_hideribbon: WebAttribute<msdyusd_windowroute_Select, { msdyusd_hideribbon: boolean | null }, {  }>;
  msdyusd_initiatingactivity_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_initiatingactivity_guid: string | null }, { msdyusd_initiatingactivity_formatted?: string }>;
  msdyusd_loadarea: WebAttribute<msdyusd_windowroute_Select, { msdyusd_loadarea: string | null }, {  }>;
  msdyusd_multiplematches_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_multiplematches_guid: string | null }, { msdyusd_multiplematches_formatted?: string }>;
  msdyusd_multiplematchesdecision: WebAttribute<msdyusd_windowroute_Select, { msdyusd_multiplematchesdecision: msdyusd_windowroute_msdyusd_multiplematchesdecision | null }, { msdyusd_multiplematchesdecision_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_windowroute_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_nomatchdecision: WebAttribute<msdyusd_windowroute_Select, { msdyusd_nomatchdecision: msdyusd_windowroute_msdyusd_nomatchdecision | null }, { msdyusd_nomatchdecision_formatted?: string }>;
  msdyusd_nomatchesaction_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_nomatchesaction_guid: string | null }, { msdyusd_nomatchesaction_formatted?: string }>;
  msdyusd_order: WebAttribute<msdyusd_windowroute_Select, { msdyusd_order: number | null }, {  }>;
  msdyusd_routetype: WebAttribute<msdyusd_windowroute_Select, { msdyusd_routetype: msdyusd_windowroute_msdyusd_routetype | null }, { msdyusd_routetype_formatted?: string }>;
  msdyusd_showtab_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_showtab_guid: string | null }, { msdyusd_showtab_formatted?: string }>;
  msdyusd_singlematchaction_guid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_singlematchaction_guid: string | null }, { msdyusd_singlematchaction_formatted?: string }>;
  msdyusd_singlematchdecision: WebAttribute<msdyusd_windowroute_Select, { msdyusd_singlematchdecision: msdyusd_windowroute_msdyusd_singlematchdecision | null }, { msdyusd_singlematchdecision_formatted?: string }>;
  msdyusd_sourceframe: WebAttribute<msdyusd_windowroute_Select, { msdyusd_sourceframe: string | null }, {  }>;
  msdyusd_url: WebAttribute<msdyusd_windowroute_Select, { msdyusd_url: string | null }, {  }>;
  msdyusd_windowrouteid: WebAttribute<msdyusd_windowroute_Select, { msdyusd_windowrouteid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_windowroute_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_windowroute_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_windowroute_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_windowroute_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_windowroute_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_windowroute_Select, { statecode: msdyusd_windowroute_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_windowroute_Select, { statuscode: msdyusd_windowroute_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_windowroute_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_windowroute_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_windowroute_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_windowroute_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_action: msdyusd_windowroute_msdyusd_action;
  msdyusd_application_guid: XQW.Guid;
  msdyusd_applicationaction_guid: XQW.Guid;
  msdyusd_condition: string;
  msdyusd_dashboardframe: string;
  msdyusd_destination: msdyusd_windowroute_msdyusd_destination;
  msdyusd_direction: msdyusd_windowroute_msdyusd_direction;
  msdyusd_entity_guid: XQW.Guid;
  msdyusd_entitysearch_guid: XQW.Guid;
  msdyusd_field: string;
  msdyusd_from_guid: XQW.Guid;
  msdyusd_fromsearch_guid: XQW.Guid;
  msdyusd_hidenavbar: boolean;
  msdyusd_hideribbon: boolean;
  msdyusd_initiatingactivity_guid: XQW.Guid;
  msdyusd_loadarea: string;
  msdyusd_multiplematches_guid: XQW.Guid;
  msdyusd_multiplematchesdecision: msdyusd_windowroute_msdyusd_multiplematchesdecision;
  msdyusd_name: string;
  msdyusd_nomatchdecision: msdyusd_windowroute_msdyusd_nomatchdecision;
  msdyusd_nomatchesaction_guid: XQW.Guid;
  msdyusd_order: number;
  msdyusd_routetype: msdyusd_windowroute_msdyusd_routetype;
  msdyusd_showtab_guid: XQW.Guid;
  msdyusd_singlematchaction_guid: XQW.Guid;
  msdyusd_singlematchdecision: msdyusd_windowroute_msdyusd_singlematchdecision;
  msdyusd_sourceframe: string;
  msdyusd_url: string;
  msdyusd_windowrouteid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_windowroute_statecode;
  statuscode: msdyusd_windowroute_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_windowroute_Expand {
  createdby: WebExpand<msdyusd_windowroute_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_windowroute_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_windowroute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_windowroute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_Application: WebExpand<msdyusd_windowroute_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_Application: UII_hostedapplication_Result }>;
  msdyusd_ApplicationAction: WebExpand<msdyusd_windowroute_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_ApplicationAction: msdyusd_agentscriptaction_Result }>;
  msdyusd_Entity: WebExpand<msdyusd_windowroute_Expand, msdyusd_entityassignment_Select, msdyusd_entityassignment_Filter, { msdyusd_Entity: msdyusd_entityassignment_Result }>;
  msdyusd_EntitySearch: WebExpand<msdyusd_windowroute_Expand, msdyusd_entitysearch_Select, msdyusd_entitysearch_Filter, { msdyusd_EntitySearch: msdyusd_entitysearch_Result }>;
  msdyusd_From: WebExpand<msdyusd_windowroute_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_From: UII_hostedapplication_Result }>;
  msdyusd_FromSearch: WebExpand<msdyusd_windowroute_Expand, msdyusd_entitysearch_Select, msdyusd_entitysearch_Filter, { msdyusd_FromSearch: msdyusd_entitysearch_Result }>;
  msdyusd_InitiatingActivity: WebExpand<msdyusd_windowroute_Expand, msdyusd_entityassignment_Select, msdyusd_entityassignment_Filter, { msdyusd_InitiatingActivity: msdyusd_entityassignment_Result }>;
  msdyusd_MultipleMatches: WebExpand<msdyusd_windowroute_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_MultipleMatches: msdyusd_agentscriptaction_Result }>;
  msdyusd_NoMatchesAction: WebExpand<msdyusd_windowroute_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_NoMatchesAction: msdyusd_agentscriptaction_Result }>;
  msdyusd_SingleMatchAction: WebExpand<msdyusd_windowroute_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_SingleMatchAction: msdyusd_agentscriptaction_Result }>;
  msdyusd_configuration_windowroute: WebExpand<msdyusd_windowroute_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_windowroute: msdyusd_configuration_Result[] }>;
  msdyusd_showtab: WebExpand<msdyusd_windowroute_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_showtab: UII_hostedapplication_Result }>;
  msdyusd_windowroute_Annotations: WebExpand<msdyusd_windowroute_Expand, Annotation_Select, Annotation_Filter, { msdyusd_windowroute_Annotations: Annotation_Result[] }>;
  msdyusd_windowroute_AsyncOperations: WebExpand<msdyusd_windowroute_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_windowroute_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_windowroute_BulkDeleteFailures: WebExpand<msdyusd_windowroute_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_windowroute_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_windowroute_MailboxTrackingFolders: WebExpand<msdyusd_windowroute_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_windowroute_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_windowroute_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_windowroute_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_windowroute_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_windowroute_ProcessSession: WebExpand<msdyusd_windowroute_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_windowroute_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_windowroute_SyncErrors: WebExpand<msdyusd_windowroute_Expand, SyncError_Select, SyncError_Filter, { msdyusd_windowroute_SyncErrors: SyncError_Result[] }>;
  msdyusd_windowroute_UserEntityInstanceDatas: WebExpand<msdyusd_windowroute_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_windowroute_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_windowroute_agentscriptaction: WebExpand<msdyusd_windowroute_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_windowroute_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
  msdyusd_windowroute_ctisearch: WebExpand<msdyusd_windowroute_Expand, msdyusd_search_Select, msdyusd_search_Filter, { msdyusd_windowroute_ctisearch: msdyusd_search_Result[] }>;
  ownerid: WebExpand<msdyusd_windowroute_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_windowroute_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_windowroute_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_windowroute_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_windowroute_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_action_formatted?: string;
  msdyusd_application_formatted?: string;
  msdyusd_applicationaction_formatted?: string;
  msdyusd_destination_formatted?: string;
  msdyusd_direction_formatted?: string;
  msdyusd_entity_formatted?: string;
  msdyusd_entitysearch_formatted?: string;
  msdyusd_from_formatted?: string;
  msdyusd_fromsearch_formatted?: string;
  msdyusd_initiatingactivity_formatted?: string;
  msdyusd_multiplematches_formatted?: string;
  msdyusd_multiplematchesdecision_formatted?: string;
  msdyusd_nomatchdecision_formatted?: string;
  msdyusd_nomatchesaction_formatted?: string;
  msdyusd_routetype_formatted?: string;
  msdyusd_showtab_formatted?: string;
  msdyusd_singlematchaction_formatted?: string;
  msdyusd_singlematchdecision_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_windowroute_Result extends msdyusd_windowroute_Base, msdyusd_windowroute_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_application_guid: string | null;
  msdyusd_applicationaction_guid: string | null;
  msdyusd_entity_guid: string | null;
  msdyusd_entitysearch_guid: string | null;
  msdyusd_from_guid: string | null;
  msdyusd_fromsearch_guid: string | null;
  msdyusd_initiatingactivity_guid: string | null;
  msdyusd_multiplematches_guid: string | null;
  msdyusd_nomatchesaction_guid: string | null;
  msdyusd_showtab_guid: string | null;
  msdyusd_singlematchaction_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_windowroute_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_Application: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  msdyusd_ApplicationAction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_Entity: WebMappingRetrieve<msdyusd_entityassignment_Select,msdyusd_entityassignment_Expand,msdyusd_entityassignment_Filter,msdyusd_entityassignment_Fixed,msdyusd_entityassignment_Result,msdyusd_entityassignment_FormattedResult>;
  msdyusd_EntitySearch: WebMappingRetrieve<msdyusd_entitysearch_Select,msdyusd_entitysearch_Expand,msdyusd_entitysearch_Filter,msdyusd_entitysearch_Fixed,msdyusd_entitysearch_Result,msdyusd_entitysearch_FormattedResult>;
  msdyusd_From: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  msdyusd_FromSearch: WebMappingRetrieve<msdyusd_entitysearch_Select,msdyusd_entitysearch_Expand,msdyusd_entitysearch_Filter,msdyusd_entitysearch_Fixed,msdyusd_entitysearch_Result,msdyusd_entitysearch_FormattedResult>;
  msdyusd_InitiatingActivity: WebMappingRetrieve<msdyusd_entityassignment_Select,msdyusd_entityassignment_Expand,msdyusd_entityassignment_Filter,msdyusd_entityassignment_Fixed,msdyusd_entityassignment_Result,msdyusd_entityassignment_FormattedResult>;
  msdyusd_MultipleMatches: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_NoMatchesAction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_SingleMatchAction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_showtab: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_windowroute_RelatedMany {
  msdyusd_configuration_windowroute: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_windowroute_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_windowroute_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_windowroute_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_windowroute_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_windowroute_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_windowroute_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_windowroute_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_windowroute_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_windowroute_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_windowroute_ctisearch: WebMappingRetrieve<msdyusd_search_Select,msdyusd_search_Expand,msdyusd_search_Filter,msdyusd_search_Fixed,msdyusd_search_Result,msdyusd_search_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_windowroutes: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_windowroutes: WebMappingRelated<msdyusd_windowroute_RelatedOne,msdyusd_windowroute_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_windowroutes: WebMappingCUDA<msdyusd_windowroute_Create,msdyusd_windowroute_Update,msdyusd_windowroute_Select>;
}

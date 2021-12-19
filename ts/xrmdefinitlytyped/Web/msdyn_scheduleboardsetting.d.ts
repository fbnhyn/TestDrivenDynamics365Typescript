interface msdyn_scheduleboardsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_bookbasedon?: boolean | null;
  msdyn_customtabname?: string | null;
  msdyn_customtabwebresource?: string | null;
  msdyn_filtervalues?: string | null;
  msdyn_fullybookedcolor?: string | null;
  msdyn_hidecancelled?: boolean | null;
  msdyn_ispublic?: boolean | null;
  msdyn_issynchronizeresources?: boolean | null;
  msdyn_mapviewtabplacement?: boolean | null;
  msdyn_notbookedcolor?: string | null;
  msdyn_ordernumber?: number | null;
  msdyn_organizationalunittooltipsviewid?: string | null;
  msdyn_organizationalunitviewid?: string | null;
  msdyn_overbookedcolor?: string | null;
  msdyn_partiallybookedcolor?: string | null;
  msdyn_saavailablecolor?: string | null;
  msdyn_saavailableicon?: string | null;
  msdyn_saavailableicondefault?: boolean | null;
  msdyn_sapartiallyavailablecolor?: string | null;
  msdyn_sapartiallyavailableicon?: string | null;
  msdyn_sapartiallyavailableicondefault?: boolean | null;
  msdyn_saunavailablecolor?: string | null;
  msdyn_saunavailableicon?: string | null;
  msdyn_saunavailableicondefault?: boolean | null;
  msdyn_scheduleboardsettingid?: string | null;
  msdyn_scheduleralertsview?: string | null;
  msdyn_schedulerbusinessunitdetailsview?: string | null;
  msdyn_schedulerbusinessunittooltipview?: string | null;
  msdyn_schedulercoredetailsview?: string | null;
  msdyn_schedulercoreslottexttemplate?: string | null;
  msdyn_schedulercoretooltipview?: string | null;
  msdyn_schedulerfieldservicedetailsview?: string | null;
  msdyn_schedulerfieldserviceslottexttemplate?: string | null;
  msdyn_schedulerfieldservicetooltipview?: string | null;
  msdyn_schedulerresourcedetailsview?: string | null;
  msdyn_schedulerresourcetooltipview?: string | null;
  msdyn_settings?: string | null;
  msdyn_sharetype?: msdyn_scheduleboardsetting_msdyn_sharetype | null;
  msdyn_tabname?: string | null;
  msdyn_unscheduledrequirementsviewid?: string | null;
  msdyn_unscheduledviewid?: string | null;
  msdyn_unscheduledwopagereccount?: number | null;
  msdyn_unscheduledwotooltipsviewid?: string | null;
  msdyn_workinghourscolor?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_scheduleboardsetting_statecode | null;
  statuscode?: msdyn_scheduleboardsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_scheduleboardsetting_Relationships {
  msdyn_FilterLayout?: msdyn_Configuration_Result | null;
  msdyn_ResourceCellTemplate?: msdyn_Configuration_Result | null;
  msdyn_RetrieveResourcesQuery?: msdyn_Configuration_Result | null;
  msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid?: msdyn_clientextension_Result[] | null;
  msdyn_scheduleboardsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_scheduleboardsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_scheduleboardsetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_scheduleboardsetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_scheduleboardsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_scheduleboardsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_scheduleboardsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_scheduleboardsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_scheduleboardsetting extends msdyn_scheduleboardsetting_Base, msdyn_scheduleboardsetting_Relationships {
  msdyn_FilterLayout_bind$msdyn_configurations?: string | null;
  msdyn_ResourceCellTemplate_bind$msdyn_configurations?: string | null;
  msdyn_RetrieveResourcesQuery_bind$msdyn_configurations?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_scheduleboardsetting_Create extends msdyn_scheduleboardsetting {
}
interface msdyn_scheduleboardsetting_Update extends msdyn_scheduleboardsetting {
}
interface msdyn_scheduleboardsetting_Select {
  createdby_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_scheduleboardsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_scheduleboardsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_scheduleboardsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookbasedon: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_bookbasedon: boolean | null }, {  }>;
  msdyn_customtabname: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_customtabname: string | null }, {  }>;
  msdyn_customtabwebresource: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_customtabwebresource: string | null }, {  }>;
  msdyn_filterlayout_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_filterlayout_guid: string | null }, { msdyn_filterlayout_formatted?: string }>;
  msdyn_filtervalues: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_filtervalues: string | null }, {  }>;
  msdyn_fullybookedcolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_fullybookedcolor: string | null }, {  }>;
  msdyn_hidecancelled: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_hidecancelled: boolean | null }, {  }>;
  msdyn_ispublic: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_ispublic: boolean | null }, {  }>;
  msdyn_issynchronizeresources: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_issynchronizeresources: boolean | null }, {  }>;
  msdyn_mapviewtabplacement: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_mapviewtabplacement: boolean | null }, {  }>;
  msdyn_notbookedcolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_notbookedcolor: string | null }, {  }>;
  msdyn_ordernumber: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_ordernumber: number | null }, {  }>;
  msdyn_organizationalunittooltipsviewid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_organizationalunittooltipsviewid: string | null }, {  }>;
  msdyn_organizationalunitviewid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_organizationalunitviewid: string | null }, {  }>;
  msdyn_overbookedcolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_overbookedcolor: string | null }, {  }>;
  msdyn_partiallybookedcolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_partiallybookedcolor: string | null }, {  }>;
  msdyn_resourcecelltemplate_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_resourcecelltemplate_guid: string | null }, { msdyn_resourcecelltemplate_formatted?: string }>;
  msdyn_retrieveresourcesquery_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_retrieveresourcesquery_guid: string | null }, { msdyn_retrieveresourcesquery_formatted?: string }>;
  msdyn_saavailablecolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_saavailablecolor: string | null }, {  }>;
  msdyn_saavailableicon: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_saavailableicon: string | null }, {  }>;
  msdyn_saavailableicondefault: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_saavailableicondefault: boolean | null }, {  }>;
  msdyn_sapartiallyavailablecolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_sapartiallyavailablecolor: string | null }, {  }>;
  msdyn_sapartiallyavailableicon: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_sapartiallyavailableicon: string | null }, {  }>;
  msdyn_sapartiallyavailableicondefault: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_sapartiallyavailableicondefault: boolean | null }, {  }>;
  msdyn_saunavailablecolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_saunavailablecolor: string | null }, {  }>;
  msdyn_saunavailableicon: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_saunavailableicon: string | null }, {  }>;
  msdyn_saunavailableicondefault: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_saunavailableicondefault: boolean | null }, {  }>;
  msdyn_scheduleboardsettingid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_scheduleboardsettingid: string | null }, {  }>;
  msdyn_scheduleralertsview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_scheduleralertsview: string | null }, {  }>;
  msdyn_schedulerbusinessunitdetailsview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerbusinessunitdetailsview: string | null }, {  }>;
  msdyn_schedulerbusinessunittooltipview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerbusinessunittooltipview: string | null }, {  }>;
  msdyn_schedulercoredetailsview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulercoredetailsview: string | null }, {  }>;
  msdyn_schedulercoreslottexttemplate: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulercoreslottexttemplate: string | null }, {  }>;
  msdyn_schedulercoretooltipview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulercoretooltipview: string | null }, {  }>;
  msdyn_schedulerfieldservicedetailsview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerfieldservicedetailsview: string | null }, {  }>;
  msdyn_schedulerfieldserviceslottexttemplate: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerfieldserviceslottexttemplate: string | null }, {  }>;
  msdyn_schedulerfieldservicetooltipview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerfieldservicetooltipview: string | null }, {  }>;
  msdyn_schedulerresourcedetailsview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerresourcedetailsview: string | null }, {  }>;
  msdyn_schedulerresourcetooltipview: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_schedulerresourcetooltipview: string | null }, {  }>;
  msdyn_settings: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_settings: string | null }, {  }>;
  msdyn_sharetype: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_sharetype: msdyn_scheduleboardsetting_msdyn_sharetype | null }, { msdyn_sharetype_formatted?: string }>;
  msdyn_tabname: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_tabname: string | null }, {  }>;
  msdyn_unscheduledrequirementsviewid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_unscheduledrequirementsviewid: string | null }, {  }>;
  msdyn_unscheduledviewid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_unscheduledviewid: string | null }, {  }>;
  msdyn_unscheduledwopagereccount: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_unscheduledwopagereccount: number | null }, {  }>;
  msdyn_unscheduledwotooltipsviewid: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_unscheduledwotooltipsviewid: string | null }, {  }>;
  msdyn_workinghourscolor: WebAttribute<msdyn_scheduleboardsetting_Select, { msdyn_workinghourscolor: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_scheduleboardsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_scheduleboardsetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_scheduleboardsetting_Select, { statecode: msdyn_scheduleboardsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_scheduleboardsetting_Select, { statuscode: msdyn_scheduleboardsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_scheduleboardsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_scheduleboardsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_scheduleboardsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_scheduleboardsetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookbasedon: boolean;
  msdyn_customtabname: string;
  msdyn_customtabwebresource: string;
  msdyn_filterlayout_guid: XQW.Guid;
  msdyn_filtervalues: string;
  msdyn_fullybookedcolor: string;
  msdyn_hidecancelled: boolean;
  msdyn_ispublic: boolean;
  msdyn_issynchronizeresources: boolean;
  msdyn_mapviewtabplacement: boolean;
  msdyn_notbookedcolor: string;
  msdyn_ordernumber: number;
  msdyn_organizationalunittooltipsviewid: string;
  msdyn_organizationalunitviewid: string;
  msdyn_overbookedcolor: string;
  msdyn_partiallybookedcolor: string;
  msdyn_resourcecelltemplate_guid: XQW.Guid;
  msdyn_retrieveresourcesquery_guid: XQW.Guid;
  msdyn_saavailablecolor: string;
  msdyn_saavailableicon: string;
  msdyn_saavailableicondefault: boolean;
  msdyn_sapartiallyavailablecolor: string;
  msdyn_sapartiallyavailableicon: string;
  msdyn_sapartiallyavailableicondefault: boolean;
  msdyn_saunavailablecolor: string;
  msdyn_saunavailableicon: string;
  msdyn_saunavailableicondefault: boolean;
  msdyn_scheduleboardsettingid: XQW.Guid;
  msdyn_scheduleralertsview: string;
  msdyn_schedulerbusinessunitdetailsview: string;
  msdyn_schedulerbusinessunittooltipview: string;
  msdyn_schedulercoredetailsview: string;
  msdyn_schedulercoreslottexttemplate: string;
  msdyn_schedulercoretooltipview: string;
  msdyn_schedulerfieldservicedetailsview: string;
  msdyn_schedulerfieldserviceslottexttemplate: string;
  msdyn_schedulerfieldservicetooltipview: string;
  msdyn_schedulerresourcedetailsview: string;
  msdyn_schedulerresourcetooltipview: string;
  msdyn_settings: string;
  msdyn_sharetype: msdyn_scheduleboardsetting_msdyn_sharetype;
  msdyn_tabname: string;
  msdyn_unscheduledrequirementsviewid: string;
  msdyn_unscheduledviewid: string;
  msdyn_unscheduledwopagereccount: number;
  msdyn_unscheduledwotooltipsviewid: string;
  msdyn_workinghourscolor: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_scheduleboardsetting_statecode;
  statuscode: msdyn_scheduleboardsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_scheduleboardsetting_Expand {
  createdby: WebExpand<msdyn_scheduleboardsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_scheduleboardsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_scheduleboardsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_scheduleboardsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_FilterLayout: WebExpand<msdyn_scheduleboardsetting_Expand, msdyn_Configuration_Select, msdyn_Configuration_Filter, { msdyn_FilterLayout: msdyn_Configuration_Result }>;
  msdyn_ResourceCellTemplate: WebExpand<msdyn_scheduleboardsetting_Expand, msdyn_Configuration_Select, msdyn_Configuration_Filter, { msdyn_ResourceCellTemplate: msdyn_Configuration_Result }>;
  msdyn_RetrieveResourcesQuery: WebExpand<msdyn_scheduleboardsetting_Expand, msdyn_Configuration_Select, msdyn_Configuration_Filter, { msdyn_RetrieveResourcesQuery: msdyn_Configuration_Result }>;
  msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid: WebExpand<msdyn_scheduleboardsetting_Expand, msdyn_clientextension_Select, msdyn_clientextension_Filter, { msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid: msdyn_clientextension_Result[] }>;
  msdyn_scheduleboardsetting_AsyncOperations: WebExpand<msdyn_scheduleboardsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_scheduleboardsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_scheduleboardsetting_BulkDeleteFailures: WebExpand<msdyn_scheduleboardsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_scheduleboardsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_scheduleboardsetting_DuplicateBaseRecord: WebExpand<msdyn_scheduleboardsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_scheduleboardsetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_scheduleboardsetting_DuplicateMatchingRecord: WebExpand<msdyn_scheduleboardsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_scheduleboardsetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_scheduleboardsetting_MailboxTrackingFolders: WebExpand<msdyn_scheduleboardsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_scheduleboardsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_scheduleboardsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_scheduleboardsetting_ProcessSession: WebExpand<msdyn_scheduleboardsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_scheduleboardsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_scheduleboardsetting_SyncErrors: WebExpand<msdyn_scheduleboardsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_scheduleboardsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_scheduleboardsetting_UserEntityInstanceDatas: WebExpand<msdyn_scheduleboardsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_scheduleboardsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_scheduleboardsetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_scheduleboardsetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_scheduleboardsetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_scheduleboardsetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_scheduleboardsetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_filterlayout_formatted?: string;
  msdyn_resourcecelltemplate_formatted?: string;
  msdyn_retrieveresourcesquery_formatted?: string;
  msdyn_sharetype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_scheduleboardsetting_Result extends msdyn_scheduleboardsetting_Base, msdyn_scheduleboardsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_filterlayout_guid: string | null;
  msdyn_resourcecelltemplate_guid: string | null;
  msdyn_retrieveresourcesquery_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_scheduleboardsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_FilterLayout: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
  msdyn_ResourceCellTemplate: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
  msdyn_RetrieveResourcesQuery: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_scheduleboardsetting_RelatedMany {
  msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid: WebMappingRetrieve<msdyn_clientextension_Select,msdyn_clientextension_Expand,msdyn_clientextension_Filter,msdyn_clientextension_Fixed,msdyn_clientextension_Result,msdyn_clientextension_FormattedResult>;
  msdyn_scheduleboardsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_scheduleboardsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_scheduleboardsetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_scheduleboardsetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_scheduleboardsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_scheduleboardsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_scheduleboardsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_scheduleboardsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_scheduleboardsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_scheduleboardsettinges: WebMappingRetrieve<msdyn_scheduleboardsetting_Select,msdyn_scheduleboardsetting_Expand,msdyn_scheduleboardsetting_Filter,msdyn_scheduleboardsetting_Fixed,msdyn_scheduleboardsetting_Result,msdyn_scheduleboardsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_scheduleboardsettinges: WebMappingRelated<msdyn_scheduleboardsetting_RelatedOne,msdyn_scheduleboardsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_scheduleboardsettinges: WebMappingCUDA<msdyn_scheduleboardsetting_Create,msdyn_scheduleboardsetting_Update,msdyn_scheduleboardsetting_Select>;
}

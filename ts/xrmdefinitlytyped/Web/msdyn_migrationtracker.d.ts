interface msdyn_migrationtracker_Base extends WebEntity {
  correlationid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_IsMigrationComplete?: boolean | null;
  msdyn_correlationid?: string | null;
  msdyn_legacyruleidname?: string | null;
  msdyn_legacyruleidtype?: string | null;
  msdyn_legacyruleitemidname?: string | null;
  msdyn_legacyruleitemidtype?: string | null;
  msdyn_migrationstatus?: msdyn_migrationtracker_migrationstatus | null;
  msdyn_migrationstatusexception?: string | null;
  msdyn_migrationstatusreason?: string | null;
  msdyn_migrationtrackerid?: string | null;
  msdyn_migrationtype?: msdyn_migrationtracker_migrationtype | null;
  msdyn_modernruleidname?: string | null;
  msdyn_modernruleidtype?: string | null;
  msdyn_modernruleitemidname?: string | null;
  msdyn_modernruleitemidtype?: string | null;
  msdyn_name?: string | null;
  msdyn_objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_migrationtracker_statecode | null;
  statuscode?: msdyn_migrationtracker_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_migrationtracker_Relationships {
  msdyn_LegacyConvertRuleId?: ConvertRule_Result | null;
  msdyn_LegacyConvertRuleItemId?: ConvertRuleItem_Result | null;
  msdyn_LegacySLAId?: SLA_Result | null;
  msdyn_LegacySLAItemId?: SLAItem_Result | null;
  msdyn_ModernConvertRuleId?: ConvertRule_Result | null;
  msdyn_ModernConvertRuleItemId?: ConvertRuleItem_Result | null;
  msdyn_ModernSLAId?: SLA_Result | null;
  msdyn_ModernSLAItemId?: SLAItem_Result | null;
  msdyn_migrationtracker_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_migrationtracker_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_migrationtracker_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_migrationtracker_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_migrationtracker_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_migrationtracker_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_migrationtracker_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_migrationtracker_SyncErrors?: SyncError_Result[] | null;
  msdyn_migrationtracker_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_migrationtracker extends msdyn_migrationtracker_Base, msdyn_migrationtracker_Relationships {
  msdyn_LegacyConvertRuleId_bind$convertrules?: string | null;
  msdyn_LegacyConvertRuleItemId_bind$convertruleitems?: string | null;
  msdyn_LegacySLAId_bind$slas?: string | null;
  msdyn_LegacySLAItemId_bind$slaitems?: string | null;
  msdyn_ModernConvertRuleId_bind$convertrules?: string | null;
  msdyn_ModernConvertRuleItemId_bind$convertruleitems?: string | null;
  msdyn_ModernSLAId_bind$slas?: string | null;
  msdyn_ModernSLAItemId_bind$slaitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_migrationtracker_Create extends msdyn_migrationtracker {
}
interface msdyn_migrationtracker_Update extends msdyn_migrationtracker {
}
interface msdyn_migrationtracker_Select {
  correlationid: WebAttribute<msdyn_migrationtracker_Select, { correlationid: string | null }, {  }>;
  createdby_guid: WebAttribute<msdyn_migrationtracker_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_migrationtracker_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_migrationtracker_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_migrationtracker_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_migrationtracker_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_migrationtracker_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_migrationtracker_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_IsMigrationComplete: WebAttribute<msdyn_migrationtracker_Select, { msdyn_IsMigrationComplete: boolean | null }, {  }>;
  msdyn_correlationid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_correlationid: string | null }, {  }>;
  msdyn_legacyconvertruleid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyconvertruleid_guid: string | null }, { msdyn_legacyconvertruleid_formatted?: string }>;
  msdyn_legacyconvertruleitemid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyconvertruleitemid_guid: string | null }, { msdyn_legacyconvertruleitemid_formatted?: string }>;
  msdyn_legacyruleidname: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyruleidname: string | null }, {  }>;
  msdyn_legacyruleidtype: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyruleidtype: string | null }, {  }>;
  msdyn_legacyruleitemidname: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyruleitemidname: string | null }, {  }>;
  msdyn_legacyruleitemidtype: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyruleitemidtype: string | null }, {  }>;
  msdyn_legacyslaid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyslaid_guid: string | null }, { msdyn_legacyslaid_formatted?: string }>;
  msdyn_legacyslaitemid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_legacyslaitemid_guid: string | null }, { msdyn_legacyslaitemid_formatted?: string }>;
  msdyn_migrationstatus: WebAttribute<msdyn_migrationtracker_Select, { msdyn_migrationstatus: msdyn_migrationtracker_migrationstatus | null }, { msdyn_migrationstatus_formatted?: string }>;
  msdyn_migrationstatusexception: WebAttribute<msdyn_migrationtracker_Select, { msdyn_migrationstatusexception: string | null }, {  }>;
  msdyn_migrationstatusreason: WebAttribute<msdyn_migrationtracker_Select, { msdyn_migrationstatusreason: string | null }, {  }>;
  msdyn_migrationtrackerid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_migrationtrackerid: string | null }, {  }>;
  msdyn_migrationtype: WebAttribute<msdyn_migrationtracker_Select, { msdyn_migrationtype: msdyn_migrationtracker_migrationtype | null }, { msdyn_migrationtype_formatted?: string }>;
  msdyn_modernconvertruleid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernconvertruleid_guid: string | null }, { msdyn_modernconvertruleid_formatted?: string }>;
  msdyn_modernconvertruleitemid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernconvertruleitemid_guid: string | null }, { msdyn_modernconvertruleitemid_formatted?: string }>;
  msdyn_modernruleidname: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernruleidname: string | null }, {  }>;
  msdyn_modernruleidtype: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernruleidtype: string | null }, {  }>;
  msdyn_modernruleitemidname: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernruleitemidname: string | null }, {  }>;
  msdyn_modernruleitemidtype: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernruleitemidtype: string | null }, {  }>;
  msdyn_modernslaid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernslaid_guid: string | null }, { msdyn_modernslaid_formatted?: string }>;
  msdyn_modernslaitemid_guid: WebAttribute<msdyn_migrationtracker_Select, { msdyn_modernslaitemid_guid: string | null }, { msdyn_modernslaitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_migrationtracker_Select, { msdyn_name: string | null }, {  }>;
  msdyn_objecttypecode: WebAttribute<msdyn_migrationtracker_Select, { msdyn_objecttypecode: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_migrationtracker_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_migrationtracker_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_migrationtracker_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_migrationtracker_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_migrationtracker_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_migrationtracker_Select, { statecode: msdyn_migrationtracker_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_migrationtracker_Select, { statuscode: msdyn_migrationtracker_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_migrationtracker_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_migrationtracker_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_migrationtracker_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_migrationtracker_Filter {
  correlationid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_IsMigrationComplete: boolean;
  msdyn_correlationid: string;
  msdyn_legacyconvertruleid_guid: XQW.Guid;
  msdyn_legacyconvertruleitemid_guid: XQW.Guid;
  msdyn_legacyruleidname: string;
  msdyn_legacyruleidtype: string;
  msdyn_legacyruleitemidname: string;
  msdyn_legacyruleitemidtype: string;
  msdyn_legacyslaid_guid: XQW.Guid;
  msdyn_legacyslaitemid_guid: XQW.Guid;
  msdyn_migrationstatus: msdyn_migrationtracker_migrationstatus;
  msdyn_migrationstatusexception: string;
  msdyn_migrationstatusreason: string;
  msdyn_migrationtrackerid: XQW.Guid;
  msdyn_migrationtype: msdyn_migrationtracker_migrationtype;
  msdyn_modernconvertruleid_guid: XQW.Guid;
  msdyn_modernconvertruleitemid_guid: XQW.Guid;
  msdyn_modernruleidname: string;
  msdyn_modernruleidtype: string;
  msdyn_modernruleitemidname: string;
  msdyn_modernruleitemidtype: string;
  msdyn_modernslaid_guid: XQW.Guid;
  msdyn_modernslaitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_objecttypecode: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_migrationtracker_statecode;
  statuscode: msdyn_migrationtracker_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_migrationtracker_Expand {
  createdby: WebExpand<msdyn_migrationtracker_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_migrationtracker_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_migrationtracker_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_migrationtracker_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_LegacyConvertRuleId: WebExpand<msdyn_migrationtracker_Expand, ConvertRule_Select, ConvertRule_Filter, { msdyn_LegacyConvertRuleId: ConvertRule_Result }>;
  msdyn_LegacyConvertRuleItemId: WebExpand<msdyn_migrationtracker_Expand, ConvertRuleItem_Select, ConvertRuleItem_Filter, { msdyn_LegacyConvertRuleItemId: ConvertRuleItem_Result }>;
  msdyn_LegacySLAId: WebExpand<msdyn_migrationtracker_Expand, SLA_Select, SLA_Filter, { msdyn_LegacySLAId: SLA_Result }>;
  msdyn_LegacySLAItemId: WebExpand<msdyn_migrationtracker_Expand, SLAItem_Select, SLAItem_Filter, { msdyn_LegacySLAItemId: SLAItem_Result }>;
  msdyn_ModernConvertRuleId: WebExpand<msdyn_migrationtracker_Expand, ConvertRule_Select, ConvertRule_Filter, { msdyn_ModernConvertRuleId: ConvertRule_Result }>;
  msdyn_ModernConvertRuleItemId: WebExpand<msdyn_migrationtracker_Expand, ConvertRuleItem_Select, ConvertRuleItem_Filter, { msdyn_ModernConvertRuleItemId: ConvertRuleItem_Result }>;
  msdyn_ModernSLAId: WebExpand<msdyn_migrationtracker_Expand, SLA_Select, SLA_Filter, { msdyn_ModernSLAId: SLA_Result }>;
  msdyn_ModernSLAItemId: WebExpand<msdyn_migrationtracker_Expand, SLAItem_Select, SLAItem_Filter, { msdyn_ModernSLAItemId: SLAItem_Result }>;
  msdyn_migrationtracker_AsyncOperations: WebExpand<msdyn_migrationtracker_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_migrationtracker_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_migrationtracker_BulkDeleteFailures: WebExpand<msdyn_migrationtracker_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_migrationtracker_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_migrationtracker_DuplicateBaseRecord: WebExpand<msdyn_migrationtracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_migrationtracker_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_migrationtracker_DuplicateMatchingRecord: WebExpand<msdyn_migrationtracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_migrationtracker_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_migrationtracker_MailboxTrackingFolders: WebExpand<msdyn_migrationtracker_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_migrationtracker_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_migrationtracker_PrincipalObjectAttributeAccesses: WebExpand<msdyn_migrationtracker_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_migrationtracker_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_migrationtracker_ProcessSession: WebExpand<msdyn_migrationtracker_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_migrationtracker_ProcessSession: ProcessSession_Result[] }>;
  msdyn_migrationtracker_SyncErrors: WebExpand<msdyn_migrationtracker_Expand, SyncError_Select, SyncError_Filter, { msdyn_migrationtracker_SyncErrors: SyncError_Result[] }>;
  msdyn_migrationtracker_UserEntityInstanceDatas: WebExpand<msdyn_migrationtracker_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_migrationtracker_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_migrationtracker_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_migrationtracker_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_migrationtracker_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_migrationtracker_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_migrationtracker_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_legacyconvertruleid_formatted?: string;
  msdyn_legacyconvertruleitemid_formatted?: string;
  msdyn_legacyslaid_formatted?: string;
  msdyn_legacyslaitemid_formatted?: string;
  msdyn_migrationstatus_formatted?: string;
  msdyn_migrationtype_formatted?: string;
  msdyn_modernconvertruleid_formatted?: string;
  msdyn_modernconvertruleitemid_formatted?: string;
  msdyn_modernslaid_formatted?: string;
  msdyn_modernslaitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_migrationtracker_Result extends msdyn_migrationtracker_Base, msdyn_migrationtracker_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_legacyconvertruleid_guid: string | null;
  msdyn_legacyconvertruleitemid_guid: string | null;
  msdyn_legacyslaid_guid: string | null;
  msdyn_legacyslaitemid_guid: string | null;
  msdyn_modernconvertruleid_guid: string | null;
  msdyn_modernconvertruleitemid_guid: string | null;
  msdyn_modernslaid_guid: string | null;
  msdyn_modernslaitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_migrationtracker_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_LegacyConvertRuleId: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
  msdyn_LegacyConvertRuleItemId: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
  msdyn_LegacySLAId: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  msdyn_LegacySLAItemId: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  msdyn_ModernConvertRuleId: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
  msdyn_ModernConvertRuleItemId: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
  msdyn_ModernSLAId: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  msdyn_ModernSLAItemId: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_migrationtracker_RelatedMany {
  msdyn_migrationtracker_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_migrationtracker_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_migrationtracker_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_migrationtracker_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_migrationtracker_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_migrationtracker_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_migrationtracker_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_migrationtracker_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_migrationtracker_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_migrationtrackers: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_migrationtrackers: WebMappingRelated<msdyn_migrationtracker_RelatedOne,msdyn_migrationtracker_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_migrationtrackers: WebMappingCUDA<msdyn_migrationtracker_Create,msdyn_migrationtracker_Update,msdyn_migrationtracker_Select>;
}

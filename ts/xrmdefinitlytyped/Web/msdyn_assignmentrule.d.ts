interface msdyn_assignmentrule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_SpecificSellersOrTeams?: string | null;
  msdyn_assignmentruleid?: string | null;
  msdyn_attributefilter?: string | null;
  msdyn_description?: string | null;
  msdyn_distributeto?: msdyn_assignmentrule_msdyn_distributeto | null;
  msdyn_distributewithavailability?: boolean | null;
  msdyn_distributewithcapacity?: boolean | null;
  msdyn_distributiontype?: msdyn_assignmentrule_msdyn_distributiontype | null;
  msdyn_entityfilter?: string | null;
  msdyn_evaluationorder?: number | null;
  msdyn_matchedrecords?: number | null;
  msdyn_matchtype?: msdyn_assignmentrule_msdyn_matchtype | null;
  msdyn_name?: string | null;
  msdyn_objecttypecode?: msdyn_assignmentrule_msdyn_objecttypecode | null;
  msdyn_sellerfilter?: string | null;
  msdyn_triggertype?: msdyn_assignmentrule_msdyn_triggertype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_assignmentrule_statecode | null;
  statuscode?: msdyn_assignmentrule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_assignmentrule_Relationships {
  msdyn_assignmentrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_assignmentrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_assignmentrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_assignmentrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_assignmentrule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_assignmentrule_SyncErrors?: SyncError_Result[] | null;
  msdyn_assignmentrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_assignmentrule_connections1?: Connection_Result[] | null;
  msdyn_assignmentrule_connections2?: Connection_Result[] | null;
  msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule?: msdyn_salesroutingrun_Result[] | null;
}
interface msdyn_assignmentrule extends msdyn_assignmentrule_Base, msdyn_assignmentrule_Relationships {
  msdyn_segmentid_bind$msdyn_segments?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_assignmentrule_Create extends msdyn_assignmentrule {
}
interface msdyn_assignmentrule_Update extends msdyn_assignmentrule {
}
interface msdyn_assignmentrule_Select {
  createdby_guid: WebAttribute<msdyn_assignmentrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_assignmentrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_assignmentrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_assignmentrule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_assignmentrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_assignmentrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_assignmentrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_SpecificSellersOrTeams: WebAttribute<msdyn_assignmentrule_Select, { msdyn_SpecificSellersOrTeams: string | null }, {  }>;
  msdyn_assignmentruleid: WebAttribute<msdyn_assignmentrule_Select, { msdyn_assignmentruleid: string | null }, {  }>;
  msdyn_attributefilter: WebAttribute<msdyn_assignmentrule_Select, { msdyn_attributefilter: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_assignmentrule_Select, { msdyn_description: string | null }, {  }>;
  msdyn_distributeto: WebAttribute<msdyn_assignmentrule_Select, { msdyn_distributeto: msdyn_assignmentrule_msdyn_distributeto | null }, { msdyn_distributeto_formatted?: string }>;
  msdyn_distributewithavailability: WebAttribute<msdyn_assignmentrule_Select, { msdyn_distributewithavailability: boolean | null }, {  }>;
  msdyn_distributewithcapacity: WebAttribute<msdyn_assignmentrule_Select, { msdyn_distributewithcapacity: boolean | null }, {  }>;
  msdyn_distributiontype: WebAttribute<msdyn_assignmentrule_Select, { msdyn_distributiontype: msdyn_assignmentrule_msdyn_distributiontype | null }, { msdyn_distributiontype_formatted?: string }>;
  msdyn_entityfilter: WebAttribute<msdyn_assignmentrule_Select, { msdyn_entityfilter: string | null }, {  }>;
  msdyn_evaluationorder: WebAttribute<msdyn_assignmentrule_Select, { msdyn_evaluationorder: number | null }, {  }>;
  msdyn_matchedrecords: WebAttribute<msdyn_assignmentrule_Select, { msdyn_matchedrecords: number | null }, {  }>;
  msdyn_matchtype: WebAttribute<msdyn_assignmentrule_Select, { msdyn_matchtype: msdyn_assignmentrule_msdyn_matchtype | null }, { msdyn_matchtype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_assignmentrule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_objecttypecode: WebAttribute<msdyn_assignmentrule_Select, { msdyn_objecttypecode: msdyn_assignmentrule_msdyn_objecttypecode | null }, { msdyn_objecttypecode_formatted?: string }>;
  msdyn_segmentid_guid: WebAttribute<msdyn_assignmentrule_Select, { msdyn_segmentid_guid: string | null }, { msdyn_segmentid_formatted?: string }>;
  msdyn_sellerfilter: WebAttribute<msdyn_assignmentrule_Select, { msdyn_sellerfilter: string | null }, {  }>;
  msdyn_triggertype: WebAttribute<msdyn_assignmentrule_Select, { msdyn_triggertype: msdyn_assignmentrule_msdyn_triggertype | null }, { msdyn_triggertype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_assignmentrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_assignmentrule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_assignmentrule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_assignmentrule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_assignmentrule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_assignmentrule_Select, { statecode: msdyn_assignmentrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_assignmentrule_Select, { statuscode: msdyn_assignmentrule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_assignmentrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_assignmentrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_assignmentrule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_assignmentrule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_SpecificSellersOrTeams: string;
  msdyn_assignmentruleid: XQW.Guid;
  msdyn_attributefilter: string;
  msdyn_description: string;
  msdyn_distributeto: msdyn_assignmentrule_msdyn_distributeto;
  msdyn_distributewithavailability: boolean;
  msdyn_distributewithcapacity: boolean;
  msdyn_distributiontype: msdyn_assignmentrule_msdyn_distributiontype;
  msdyn_entityfilter: string;
  msdyn_evaluationorder: number;
  msdyn_matchedrecords: number;
  msdyn_matchtype: msdyn_assignmentrule_msdyn_matchtype;
  msdyn_name: string;
  msdyn_objecttypecode: msdyn_assignmentrule_msdyn_objecttypecode;
  msdyn_segmentid_guid: XQW.Guid;
  msdyn_sellerfilter: string;
  msdyn_triggertype: msdyn_assignmentrule_msdyn_triggertype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_assignmentrule_statecode;
  statuscode: msdyn_assignmentrule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_assignmentrule_Expand {
  createdby: WebExpand<msdyn_assignmentrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_assignmentrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_assignmentrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_assignmentrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assignmentrule_AsyncOperations: WebExpand<msdyn_assignmentrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_assignmentrule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_assignmentrule_BulkDeleteFailures: WebExpand<msdyn_assignmentrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_assignmentrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_assignmentrule_MailboxTrackingFolders: WebExpand<msdyn_assignmentrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_assignmentrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_assignmentrule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_assignmentrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_assignmentrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_assignmentrule_ProcessSession: WebExpand<msdyn_assignmentrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_assignmentrule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_assignmentrule_SyncErrors: WebExpand<msdyn_assignmentrule_Expand, SyncError_Select, SyncError_Filter, { msdyn_assignmentrule_SyncErrors: SyncError_Result[] }>;
  msdyn_assignmentrule_UserEntityInstanceDatas: WebExpand<msdyn_assignmentrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_assignmentrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_assignmentrule_connections1: WebExpand<msdyn_assignmentrule_Expand, Connection_Select, Connection_Filter, { msdyn_assignmentrule_connections1: Connection_Result[] }>;
  msdyn_assignmentrule_connections2: WebExpand<msdyn_assignmentrule_Expand, Connection_Select, Connection_Filter, { msdyn_assignmentrule_connections2: Connection_Result[] }>;
  msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule: WebExpand<msdyn_assignmentrule_Expand, msdyn_salesroutingrun_Select, msdyn_salesroutingrun_Filter, { msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule: msdyn_salesroutingrun_Result[] }>;
  msdyn_segmentid: WebExpand<msdyn_assignmentrule_Expand, msdyn_segment_Select, msdyn_segment_Filter, { msdyn_segmentid: msdyn_segment_Result }>;
  ownerid: WebExpand<msdyn_assignmentrule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_assignmentrule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_assignmentrule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_assignmentrule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_assignmentrule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_distributeto_formatted?: string;
  msdyn_distributiontype_formatted?: string;
  msdyn_matchtype_formatted?: string;
  msdyn_objecttypecode_formatted?: string;
  msdyn_segmentid_formatted?: string;
  msdyn_triggertype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_assignmentrule_Result extends msdyn_assignmentrule_Base, msdyn_assignmentrule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_segmentid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_assignmentrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_segmentid: WebMappingRetrieve<msdyn_segment_Select,msdyn_segment_Expand,msdyn_segment_Filter,msdyn_segment_Fixed,msdyn_segment_Result,msdyn_segment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_assignmentrule_RelatedMany {
  msdyn_assignmentrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_assignmentrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_assignmentrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_assignmentrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_assignmentrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_assignmentrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_assignmentrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_assignmentrule_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_assignmentrule_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule: WebMappingRetrieve<msdyn_salesroutingrun_Select,msdyn_salesroutingrun_Expand,msdyn_salesroutingrun_Filter,msdyn_salesroutingrun_Fixed,msdyn_salesroutingrun_Result,msdyn_salesroutingrun_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_assignmentrules: WebMappingRetrieve<msdyn_assignmentrule_Select,msdyn_assignmentrule_Expand,msdyn_assignmentrule_Filter,msdyn_assignmentrule_Fixed,msdyn_assignmentrule_Result,msdyn_assignmentrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_assignmentrules: WebMappingRelated<msdyn_assignmentrule_RelatedOne,msdyn_assignmentrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_assignmentrules: WebMappingCUDA<msdyn_assignmentrule_Create,msdyn_assignmentrule_Update,msdyn_assignmentrule_Select>;
}

interface msdyn_ocphonenumber_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_appmodule?: msdyn_appmodule | null;
  msdyn_countryisocode?: string | null;
  msdyn_name?: string | null;
  msdyn_ocphonenumberid?: string | null;
  msdyn_ocphonenumbersource?: msdyn_ocphonenumber_msdyn_ocphonenumbersource | null;
  msdyn_phoneinboundenabled?: boolean | null;
  msdyn_phonenumber?: string | null;
  msdyn_phoneoutboundenabled?: boolean | null;
  msdyn_smsinboundenabled?: boolean | null;
  msdyn_smsoutboundenabled?: boolean | null;
  msdyn_type?: msdyn_ocphonenumber_msdyn_type | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocphonenumber_statecode | null;
  statuscode?: msdyn_ocphonenumber_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocphonenumber_Relationships {
  msdyn_communicationprovidersettingid?: msdyn_occommunicationprovidersetting_Result | null;
  msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid?: msdyn_ocprovisioningstate_Result[] | null;
  msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid?: msdyn_ocsmschannelsetting_Result[] | null;
  msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid?: msdyn_smsnumber_Result[] | null;
  msdyn_msdyn_ocphonenumber_systemuser_phonenumberid?: SystemUser_Result[] | null;
  msdyn_ocphonenumber_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocphonenumber_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocphonenumber_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocphonenumber_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocphonenumber_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocphonenumber_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocphonenumber_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocphonenumber_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocphonenumber_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocphonenumber extends msdyn_ocphonenumber_Base, msdyn_ocphonenumber_Relationships {
  msdyn_carrierid_bind$msdyn_occarriers?: string | null;
  msdyn_communicationprovidersettingid_bind$msdyn_occommunicationprovidersettings?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocphonenumber_Create extends msdyn_ocphonenumber {
}
interface msdyn_ocphonenumber_Update extends msdyn_ocphonenumber {
}
interface msdyn_ocphonenumber_Select {
  createdby_guid: WebAttribute<msdyn_ocphonenumber_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocphonenumber_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocphonenumber_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocphonenumber_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocphonenumber_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocphonenumber_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocphonenumber_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appmodule: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_appmodule: msdyn_appmodule | null }, { msdyn_appmodule_formatted?: string }>;
  msdyn_carrierid_guid: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_carrierid_guid: string | null }, { msdyn_carrierid_formatted?: string }>;
  msdyn_countryisocode: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_countryisocode: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occommunicationprovidersettingid_guid: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_occommunicationprovidersettingid_guid: string | null }, { msdyn_occommunicationprovidersettingid_formatted?: string }>;
  msdyn_ocphonenumberid: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_ocphonenumberid: string | null }, {  }>;
  msdyn_ocphonenumbersource: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_ocphonenumbersource: msdyn_ocphonenumber_msdyn_ocphonenumbersource | null }, { msdyn_ocphonenumbersource_formatted?: string }>;
  msdyn_phoneinboundenabled: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_phoneinboundenabled: boolean | null }, {  }>;
  msdyn_phonenumber: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_phonenumber: string | null }, {  }>;
  msdyn_phoneoutboundenabled: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_phoneoutboundenabled: boolean | null }, {  }>;
  msdyn_smsinboundenabled: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_smsinboundenabled: boolean | null }, {  }>;
  msdyn_smsoutboundenabled: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_smsoutboundenabled: boolean | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_ocphonenumber_Select, { msdyn_type: msdyn_ocphonenumber_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocphonenumber_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocphonenumber_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocphonenumber_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocphonenumber_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocphonenumber_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocphonenumber_Select, { statecode: msdyn_ocphonenumber_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocphonenumber_Select, { statuscode: msdyn_ocphonenumber_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocphonenumber_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocphonenumber_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocphonenumber_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocphonenumber_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_appmodule: msdyn_appmodule;
  msdyn_carrierid_guid: XQW.Guid;
  msdyn_countryisocode: string;
  msdyn_name: string;
  msdyn_occommunicationprovidersettingid_guid: XQW.Guid;
  msdyn_ocphonenumberid: XQW.Guid;
  msdyn_ocphonenumbersource: msdyn_ocphonenumber_msdyn_ocphonenumbersource;
  msdyn_phoneinboundenabled: boolean;
  msdyn_phonenumber: string;
  msdyn_phoneoutboundenabled: boolean;
  msdyn_smsinboundenabled: boolean;
  msdyn_smsoutboundenabled: boolean;
  msdyn_type: msdyn_ocphonenumber_msdyn_type;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocphonenumber_statecode;
  statuscode: msdyn_ocphonenumber_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocphonenumber_Expand {
  createdby: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_carrierid: WebExpand<msdyn_ocphonenumber_Expand, msdyn_occarrier_Select, msdyn_occarrier_Filter, { msdyn_carrierid: msdyn_occarrier_Result }>;
  msdyn_communicationprovidersettingid: WebExpand<msdyn_ocphonenumber_Expand, msdyn_occommunicationprovidersetting_Select, msdyn_occommunicationprovidersetting_Filter, { msdyn_communicationprovidersettingid: msdyn_occommunicationprovidersetting_Result }>;
  msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid: WebExpand<msdyn_ocphonenumber_Expand, msdyn_ocprovisioningstate_Select, msdyn_ocprovisioningstate_Filter, { msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid: msdyn_ocprovisioningstate_Result[] }>;
  msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid: WebExpand<msdyn_ocphonenumber_Expand, msdyn_ocsmschannelsetting_Select, msdyn_ocsmschannelsetting_Filter, { msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid: msdyn_ocsmschannelsetting_Result[] }>;
  msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid: WebExpand<msdyn_ocphonenumber_Expand, msdyn_smsnumber_Select, msdyn_smsnumber_Filter, { msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid: msdyn_smsnumber_Result[] }>;
  msdyn_msdyn_ocphonenumber_systemuser_phonenumberid: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_msdyn_ocphonenumber_systemuser_phonenumberid: SystemUser_Result[] }>;
  msdyn_ocphonenumber_AsyncOperations: WebExpand<msdyn_ocphonenumber_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocphonenumber_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocphonenumber_BulkDeleteFailures: WebExpand<msdyn_ocphonenumber_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocphonenumber_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocphonenumber_DuplicateBaseRecord: WebExpand<msdyn_ocphonenumber_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocphonenumber_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocphonenumber_DuplicateMatchingRecord: WebExpand<msdyn_ocphonenumber_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocphonenumber_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocphonenumber_MailboxTrackingFolders: WebExpand<msdyn_ocphonenumber_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocphonenumber_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocphonenumber_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocphonenumber_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocphonenumber_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocphonenumber_ProcessSession: WebExpand<msdyn_ocphonenumber_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocphonenumber_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocphonenumber_SyncErrors: WebExpand<msdyn_ocphonenumber_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocphonenumber_SyncErrors: SyncError_Result[] }>;
  msdyn_ocphonenumber_UserEntityInstanceDatas: WebExpand<msdyn_ocphonenumber_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocphonenumber_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocphonenumber_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocphonenumber_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocphonenumber_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocphonenumber_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_appmodule_formatted?: string;
  msdyn_carrierid_formatted?: string;
  msdyn_occommunicationprovidersettingid_formatted?: string;
  msdyn_ocphonenumbersource_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocphonenumber_Result extends msdyn_ocphonenumber_Base, msdyn_ocphonenumber_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_carrierid_guid: string | null;
  msdyn_occommunicationprovidersettingid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocphonenumber_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_carrierid: WebMappingRetrieve<msdyn_occarrier_Select,msdyn_occarrier_Expand,msdyn_occarrier_Filter,msdyn_occarrier_Fixed,msdyn_occarrier_Result,msdyn_occarrier_FormattedResult>;
  msdyn_communicationprovidersettingid: WebMappingRetrieve<msdyn_occommunicationprovidersetting_Select,msdyn_occommunicationprovidersetting_Expand,msdyn_occommunicationprovidersetting_Filter,msdyn_occommunicationprovidersetting_Fixed,msdyn_occommunicationprovidersetting_Result,msdyn_occommunicationprovidersetting_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocphonenumber_RelatedMany {
  msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid: WebMappingRetrieve<msdyn_ocprovisioningstate_Select,msdyn_ocprovisioningstate_Expand,msdyn_ocprovisioningstate_Filter,msdyn_ocprovisioningstate_Fixed,msdyn_ocprovisioningstate_Result,msdyn_ocprovisioningstate_FormattedResult>;
  msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid: WebMappingRetrieve<msdyn_ocsmschannelsetting_Select,msdyn_ocsmschannelsetting_Expand,msdyn_ocsmschannelsetting_Filter,msdyn_ocsmschannelsetting_Fixed,msdyn_ocsmschannelsetting_Result,msdyn_ocsmschannelsetting_FormattedResult>;
  msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid: WebMappingRetrieve<msdyn_smsnumber_Select,msdyn_smsnumber_Expand,msdyn_smsnumber_Filter,msdyn_smsnumber_Fixed,msdyn_smsnumber_Result,msdyn_smsnumber_FormattedResult>;
  msdyn_msdyn_ocphonenumber_systemuser_phonenumberid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocphonenumber_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocphonenumber_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocphonenumber_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocphonenumber_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocphonenumber_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocphonenumber_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocphonenumber_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocphonenumber_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocphonenumber_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocphonenumbers: WebMappingRetrieve<msdyn_ocphonenumber_Select,msdyn_ocphonenumber_Expand,msdyn_ocphonenumber_Filter,msdyn_ocphonenumber_Fixed,msdyn_ocphonenumber_Result,msdyn_ocphonenumber_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocphonenumbers: WebMappingRelated<msdyn_ocphonenumber_RelatedOne,msdyn_ocphonenumber_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocphonenumbers: WebMappingCUDA<msdyn_ocphonenumber_Create,msdyn_ocphonenumber_Update,msdyn_ocphonenumber_Select>;
}

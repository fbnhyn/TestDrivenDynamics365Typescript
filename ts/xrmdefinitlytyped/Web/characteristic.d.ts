interface Characteristic_Base extends WebEntity {
  characteristicid?: string | null;
  characteristictype?: bookableresourcecharacteristictype | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_requireapproval?: boolean | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: characteristic_statecode | null;
  statuscode?: characteristic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Characteristic_Relationships {
  Characteristic_SyncErrors?: SyncError_Result[] | null;
  characteristic_AsyncOperations?: AsyncOperation_Result[] | null;
  characteristic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  characteristic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  characteristic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  characteristic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  characteristic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  characteristic_ProcessSession?: ProcessSession_Result[] | null;
  characteristic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  characteristic_bookableresourcecharacteristic_Characteristic?: BookableResourceCharacteristic_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic?: msdyn_characteristicreqforteammember_Result[] | null;
  msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic?: msdyn_incidenttypecharacteristic_Result[] | null;
  msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic?: msdyn_ocliveworkitemcharacteristic_Result[] | null;
  msdyn_characteristic_msdyn_requirementcharacteristic_characteristic?: msdyn_requirementcharacteristic_Result[] | null;
  msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic?: msdyn_rolecompetencyrequirement_Result[] | null;
  msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: msdyn_rulesetdependencymapping_Result[] | null;
  msdyn_characteristic_msdyn_workordercharacteristic_Characteristic?: msdyn_workordercharacteristic_Result[] | null;
  msdyn_characteristic_skillattachmenttarget?: msdyn_skillattachmenttarget_Result[] | null;
  msdyn_ocsitdskill_skillid_Characteristic?: msdyn_ocsitdskill_Result[] | null;
}
interface Characteristic extends Characteristic_Base, Characteristic_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Characteristic_Create extends Characteristic {
}
interface Characteristic_Update extends Characteristic {
}
interface Characteristic_Select {
  characteristicid: WebAttribute<Characteristic_Select, { characteristicid: string | null }, {  }>;
  characteristictype: WebAttribute<Characteristic_Select, { characteristictype: bookableresourcecharacteristictype | null }, { characteristictype_formatted?: string }>;
  createdby_guid: WebAttribute<Characteristic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Characteristic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Characteristic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Characteristic_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<Characteristic_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Characteristic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Characteristic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Characteristic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Characteristic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_requireapproval: WebAttribute<Characteristic_Select, { msdyn_requireapproval: boolean | null }, {  }>;
  name: WebAttribute<Characteristic_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Characteristic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Characteristic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Characteristic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Characteristic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Characteristic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<Characteristic_Select, { statecode: characteristic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Characteristic_Select, { statuscode: characteristic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Characteristic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Characteristic_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Characteristic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Characteristic_Select, { versionnumber: number | null }, {  }>;
}
interface Characteristic_Filter {
  characteristicid: XQW.Guid;
  characteristictype: bookableresourcecharacteristictype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_requireapproval: boolean;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: characteristic_statecode;
  statuscode: characteristic_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Characteristic_Expand {
  Characteristic_SyncErrors: WebExpand<Characteristic_Expand, SyncError_Select, SyncError_Filter, { Characteristic_SyncErrors: SyncError_Result[] }>;
  characteristic_AsyncOperations: WebExpand<Characteristic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { characteristic_AsyncOperations: AsyncOperation_Result[] }>;
  characteristic_BulkDeleteFailures: WebExpand<Characteristic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { characteristic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  characteristic_DuplicateBaseRecord: WebExpand<Characteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { characteristic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  characteristic_DuplicateMatchingRecord: WebExpand<Characteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { characteristic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  characteristic_MailboxTrackingFolders: WebExpand<Characteristic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { characteristic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  characteristic_PrincipalObjectAttributeAccesses: WebExpand<Characteristic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { characteristic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  characteristic_ProcessSession: WebExpand<Characteristic_Expand, ProcessSession_Select, ProcessSession_Filter, { characteristic_ProcessSession: ProcessSession_Result[] }>;
  characteristic_UserEntityInstanceDatas: WebExpand<Characteristic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { characteristic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  characteristic_bookableresourcecharacteristic_Characteristic: WebExpand<Characteristic_Expand, BookableResourceCharacteristic_Select, BookableResourceCharacteristic_Filter, { characteristic_bookableresourcecharacteristic_Characteristic: BookableResourceCharacteristic_Result[] }>;
  createdbyname: WebExpand<Characteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<Characteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<Characteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<Characteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic: WebExpand<Characteristic_Expand, msdyn_characteristicreqforteammember_Select, msdyn_characteristicreqforteammember_Filter, { msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic: msdyn_characteristicreqforteammember_Result[] }>;
  msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: WebExpand<Characteristic_Expand, msdyn_incidenttypecharacteristic_Select, msdyn_incidenttypecharacteristic_Filter, { msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: msdyn_incidenttypecharacteristic_Result[] }>;
  msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: WebExpand<Characteristic_Expand, msdyn_ocliveworkitemcharacteristic_Select, msdyn_ocliveworkitemcharacteristic_Filter, { msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: msdyn_ocliveworkitemcharacteristic_Result[] }>;
  msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: WebExpand<Characteristic_Expand, msdyn_requirementcharacteristic_Select, msdyn_requirementcharacteristic_Filter, { msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: msdyn_requirementcharacteristic_Result[] }>;
  msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic: WebExpand<Characteristic_Expand, msdyn_rolecompetencyrequirement_Select, msdyn_rolecompetencyrequirement_Filter, { msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic: msdyn_rolecompetencyrequirement_Result[] }>;
  msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebExpand<Characteristic_Expand, msdyn_rulesetdependencymapping_Select, msdyn_rulesetdependencymapping_Filter, { msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: msdyn_rulesetdependencymapping_Result[] }>;
  msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: WebExpand<Characteristic_Expand, msdyn_workordercharacteristic_Select, msdyn_workordercharacteristic_Filter, { msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: msdyn_workordercharacteristic_Result[] }>;
  msdyn_characteristic_skillattachmenttarget: WebExpand<Characteristic_Expand, msdyn_skillattachmenttarget_Select, msdyn_skillattachmenttarget_Filter, { msdyn_characteristic_skillattachmenttarget: msdyn_skillattachmenttarget_Result[] }>;
  msdyn_ocsitdskill_skillid_Characteristic: WebExpand<Characteristic_Expand, msdyn_ocsitdskill_Select, msdyn_ocsitdskill_Filter, { msdyn_ocsitdskill_skillid_Characteristic: msdyn_ocsitdskill_Result[] }>;
  ownerid: WebExpand<Characteristic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Characteristic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Characteristic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Characteristic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<Characteristic_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface Characteristic_FormattedResult {
  characteristictype_formatted?: string;
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
  transactioncurrencyid_formatted?: string;
}
interface Characteristic_Result extends Characteristic_Base, Characteristic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Characteristic_RelatedOne {
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Characteristic_RelatedMany {
  Characteristic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  characteristic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  characteristic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  characteristic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  characteristic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  characteristic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  characteristic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  characteristic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  characteristic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  characteristic_bookableresourcecharacteristic_Characteristic: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
  msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic: WebMappingRetrieve<msdyn_characteristicreqforteammember_Select,msdyn_characteristicreqforteammember_Expand,msdyn_characteristicreqforteammember_Filter,msdyn_characteristicreqforteammember_Fixed,msdyn_characteristicreqforteammember_Result,msdyn_characteristicreqforteammember_FormattedResult>;
  msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: WebMappingRetrieve<msdyn_incidenttypecharacteristic_Select,msdyn_incidenttypecharacteristic_Expand,msdyn_incidenttypecharacteristic_Filter,msdyn_incidenttypecharacteristic_Fixed,msdyn_incidenttypecharacteristic_Result,msdyn_incidenttypecharacteristic_FormattedResult>;
  msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: WebMappingRetrieve<msdyn_ocliveworkitemcharacteristic_Select,msdyn_ocliveworkitemcharacteristic_Expand,msdyn_ocliveworkitemcharacteristic_Filter,msdyn_ocliveworkitemcharacteristic_Fixed,msdyn_ocliveworkitemcharacteristic_Result,msdyn_ocliveworkitemcharacteristic_FormattedResult>;
  msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: WebMappingRetrieve<msdyn_requirementcharacteristic_Select,msdyn_requirementcharacteristic_Expand,msdyn_requirementcharacteristic_Filter,msdyn_requirementcharacteristic_Fixed,msdyn_requirementcharacteristic_Result,msdyn_requirementcharacteristic_FormattedResult>;
  msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic: WebMappingRetrieve<msdyn_rolecompetencyrequirement_Select,msdyn_rolecompetencyrequirement_Expand,msdyn_rolecompetencyrequirement_Filter,msdyn_rolecompetencyrequirement_Fixed,msdyn_rolecompetencyrequirement_Result,msdyn_rolecompetencyrequirement_FormattedResult>;
  msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
  msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: WebMappingRetrieve<msdyn_workordercharacteristic_Select,msdyn_workordercharacteristic_Expand,msdyn_workordercharacteristic_Filter,msdyn_workordercharacteristic_Fixed,msdyn_workordercharacteristic_Result,msdyn_workordercharacteristic_FormattedResult>;
  msdyn_characteristic_skillattachmenttarget: WebMappingRetrieve<msdyn_skillattachmenttarget_Select,msdyn_skillattachmenttarget_Expand,msdyn_skillattachmenttarget_Filter,msdyn_skillattachmenttarget_Fixed,msdyn_skillattachmenttarget_Result,msdyn_skillattachmenttarget_FormattedResult>;
  msdyn_ocsitdskill_skillid_Characteristic: WebMappingRetrieve<msdyn_ocsitdskill_Select,msdyn_ocsitdskill_Expand,msdyn_ocsitdskill_Filter,msdyn_ocsitdskill_Fixed,msdyn_ocsitdskill_Result,msdyn_ocsitdskill_FormattedResult>;
}
interface WebEntitiesRetrieve {
  characteristics: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
}
interface WebEntitiesRelated {
  characteristics: WebMappingRelated<Characteristic_RelatedOne,Characteristic_RelatedMany>;
}
interface WebEntitiesCUDA {
  characteristics: WebMappingCUDA<Characteristic_Create,Characteristic_Update,Characteristic_Select>;
}

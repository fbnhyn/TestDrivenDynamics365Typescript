interface SocialProfile_Base extends WebEntity {
  blocked?: boolean | null;
  community?: socialprofile_community | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  influencescore?: number | null;
  modifiedon?: Date | null;
  msdyn_customeroptout?: boolean | null;
  msdyn_ocfollowercount?: number | null;
  msdyn_ocfollowingcount?: number | null;
  msdyn_ocfriendcount?: number | null;
  msdyn_phonenumber?: string | null;
  msdyn_profileimagelink?: string | null;
  overriddencreatedon?: Date | null;
  profilefullname?: string | null;
  profilelink?: string | null;
  profilename?: string | null;
  socialprofileid?: string | null;
  statecode?: socialprofile_statecode | null;
  statuscode?: socialprofile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uniqueprofileid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SocialProfile_Relationships {
  SocialProfile_AsyncOperations?: AsyncOperation_Result[] | null;
  SocialProfile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  SocialProfile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  SocialProfile_ProcessSessions?: ProcessSession_Result[] | null;
  SocialProfile_SyncErrors?: SyncError_Result[] | null;
  Socialprofile_SocialActivities?: SocialActivity_Result[] | null;
  customerid_account?: Account_Result | null;
  customerid_contact?: Contact_Result | null;
  msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid?: msdyn_ocliveworkitem_Result[] | null;
  socialprofile_cases?: Incident_Result[] | null;
  socialprofile_connections1?: Connection_Result[] | null;
  socialprofile_connections2?: Connection_Result[] | null;
  socialprofile_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
}
interface SocialProfile extends SocialProfile_Base, SocialProfile_Relationships {
  customerid_account_bind$accounts?: string | null;
  customerid_contact_bind$contacts?: string | null;
  msdyn_octwitterhandleid_bind$msdyn_octwitterhandles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface SocialProfile_Create extends SocialProfile {
}
interface SocialProfile_Update extends SocialProfile {
}
interface SocialProfile_Select {
  blocked: WebAttribute<SocialProfile_Select, { blocked: boolean | null }, {  }>;
  community: WebAttribute<SocialProfile_Select, { community: socialprofile_community | null }, { community_formatted?: string }>;
  createdby_guid: WebAttribute<SocialProfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SocialProfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SocialProfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customerid_guid: WebAttribute<SocialProfile_Select, { customerid_guid: string | null }, { customerid_formatted?: string }>;
  exchangerate: WebAttribute<SocialProfile_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<SocialProfile_Select, { importsequencenumber: number | null }, {  }>;
  influencescore: WebAttribute<SocialProfile_Select, { influencescore: number | null }, {  }>;
  modifiedby_guid: WebAttribute<SocialProfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SocialProfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SocialProfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customeroptout: WebAttribute<SocialProfile_Select, { msdyn_customeroptout: boolean | null }, {  }>;
  msdyn_ocfollowercount: WebAttribute<SocialProfile_Select, { msdyn_ocfollowercount: number | null }, {  }>;
  msdyn_ocfollowingcount: WebAttribute<SocialProfile_Select, { msdyn_ocfollowingcount: number | null }, {  }>;
  msdyn_ocfriendcount: WebAttribute<SocialProfile_Select, { msdyn_ocfriendcount: number | null }, {  }>;
  msdyn_octwitterhandleid_guid: WebAttribute<SocialProfile_Select, { msdyn_octwitterhandleid_guid: string | null }, { msdyn_octwitterhandleid_formatted?: string }>;
  msdyn_phonenumber: WebAttribute<SocialProfile_Select, { msdyn_phonenumber: string | null }, {  }>;
  msdyn_profileimagelink: WebAttribute<SocialProfile_Select, { msdyn_profileimagelink: string | null }, {  }>;
  overriddencreatedon: WebAttribute<SocialProfile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<SocialProfile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SocialProfile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<SocialProfile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<SocialProfile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  profilefullname: WebAttribute<SocialProfile_Select, { profilefullname: string | null }, {  }>;
  profilelink: WebAttribute<SocialProfile_Select, { profilelink: string | null }, {  }>;
  profilename: WebAttribute<SocialProfile_Select, { profilename: string | null }, {  }>;
  socialprofileid: WebAttribute<SocialProfile_Select, { socialprofileid: string | null }, {  }>;
  statecode: WebAttribute<SocialProfile_Select, { statecode: socialprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SocialProfile_Select, { statuscode: socialprofile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<SocialProfile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SocialProfile_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uniqueprofileid: WebAttribute<SocialProfile_Select, { uniqueprofileid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SocialProfile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SocialProfile_Select, { versionnumber: number | null }, {  }>;
}
interface SocialProfile_Filter {
  blocked: boolean;
  community: socialprofile_community;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customerid_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  influencescore: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customeroptout: boolean;
  msdyn_ocfollowercount: number;
  msdyn_ocfollowingcount: number;
  msdyn_ocfriendcount: number;
  msdyn_octwitterhandleid_guid: XQW.Guid;
  msdyn_phonenumber: string;
  msdyn_profileimagelink: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  profilefullname: string;
  profilelink: string;
  profilename: string;
  socialprofileid: XQW.Guid;
  statecode: socialprofile_statecode;
  statuscode: socialprofile_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  uniqueprofileid: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SocialProfile_Expand {
  SocialProfile_AsyncOperations: WebExpand<SocialProfile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SocialProfile_AsyncOperations: AsyncOperation_Result[] }>;
  SocialProfile_DuplicateBaseRecord: WebExpand<SocialProfile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { SocialProfile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  SocialProfile_DuplicateMatchingRecord: WebExpand<SocialProfile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { SocialProfile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  SocialProfile_ProcessSessions: WebExpand<SocialProfile_Expand, ProcessSession_Select, ProcessSession_Filter, { SocialProfile_ProcessSessions: ProcessSession_Result[] }>;
  SocialProfile_SyncErrors: WebExpand<SocialProfile_Expand, SyncError_Select, SyncError_Filter, { SocialProfile_SyncErrors: SyncError_Result[] }>;
  Socialprofile_SocialActivities: WebExpand<SocialProfile_Expand, SocialActivity_Select, SocialActivity_Filter, { Socialprofile_SocialActivities: SocialActivity_Result[] }>;
  createdonbehalfby: WebExpand<SocialProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customerid_account: WebExpand<SocialProfile_Expand, Account_Select, Account_Filter, { customerid_account: Account_Result }>;
  customerid_contact: WebExpand<SocialProfile_Expand, Contact_Select, Contact_Filter, { customerid_contact: Contact_Result }>;
  modifiedonbehalfby: WebExpand<SocialProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_octwitterhandleid: WebExpand<SocialProfile_Expand, msdyn_octwitterhandle_Select, msdyn_octwitterhandle_Filter, { msdyn_octwitterhandleid: msdyn_octwitterhandle_Result }>;
  msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid: WebExpand<SocialProfile_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid: msdyn_ocliveworkitem_Result[] }>;
  ownerid: WebExpand<SocialProfile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<SocialProfile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owninguser: WebExpand<SocialProfile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  socialprofile_cases: WebExpand<SocialProfile_Expand, Incident_Select, Incident_Filter, { socialprofile_cases: Incident_Result[] }>;
  socialprofile_connections1: WebExpand<SocialProfile_Expand, Connection_Select, Connection_Filter, { socialprofile_connections1: Connection_Result[] }>;
  socialprofile_connections2: WebExpand<SocialProfile_Expand, Connection_Select, Connection_Filter, { socialprofile_connections2: Connection_Result[] }>;
  socialprofile_principalobjectattributeaccess: WebExpand<SocialProfile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { socialprofile_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  transactioncurrencyid: WebExpand<SocialProfile_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface SocialProfile_FormattedResult {
  community_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customerid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_octwitterhandleid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SocialProfile_Result extends SocialProfile_Base, SocialProfile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customerid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_octwitterhandleid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SocialProfile_RelatedOne {
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  customerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_octwitterhandleid: WebMappingRetrieve<msdyn_octwitterhandle_Select,msdyn_octwitterhandle_Expand,msdyn_octwitterhandle_Filter,msdyn_octwitterhandle_Fixed,msdyn_octwitterhandle_Result,msdyn_octwitterhandle_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SocialProfile_RelatedMany {
  SocialProfile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SocialProfile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  SocialProfile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  SocialProfile_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  SocialProfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  Socialprofile_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  socialprofile_cases: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  socialprofile_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  socialprofile_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  socialprofile_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
}
interface WebEntitiesRetrieve {
  socialprofiles: WebMappingRetrieve<SocialProfile_Select,SocialProfile_Expand,SocialProfile_Filter,SocialProfile_Fixed,SocialProfile_Result,SocialProfile_FormattedResult>;
}
interface WebEntitiesRelated {
  socialprofiles: WebMappingRelated<SocialProfile_RelatedOne,SocialProfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  socialprofiles: WebMappingCUDA<SocialProfile_Create,SocialProfile_Update,SocialProfile_Select>;
}

interface EmailHash_Base extends WebEntity {
  emailhashid?: string | null;
  hash?: number | null;
  hashtype?: number | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  versionnumber?: number | null;
}
interface EmailHash_Relationships {
  activityid_activitypointer?: ActivityPointer_Result | null;
  activityid_email?: Email_Result | null;
  userentityinstancedata_emailhash?: UserEntityInstanceData_Result[] | null;
}
interface EmailHash extends EmailHash_Base, EmailHash_Relationships {
  activityid_activitypointer_bind$activitypointers?: string | null;
  activityid_email_bind$emails?: string | null;
}
interface EmailHash_Create extends EmailHash {
}
interface EmailHash_Update extends EmailHash {
}
interface EmailHash_Select {
  activityid_guid: WebAttribute<EmailHash_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
  emailhashid: WebAttribute<EmailHash_Select, { emailhashid: string | null }, {  }>;
  hash: WebAttribute<EmailHash_Select, { hash: number | null }, {  }>;
  hashtype: WebAttribute<EmailHash_Select, { hashtype: number | null }, {  }>;
  ownerid_guid: WebAttribute<EmailHash_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<EmailHash_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<EmailHash_Select, { owninguser: string | null }, {  }>;
  versionnumber: WebAttribute<EmailHash_Select, { versionnumber: number | null }, {  }>;
}
interface EmailHash_Filter {
  activityid_guid: XQW.Guid;
  emailhashid: XQW.Guid;
  hash: number;
  hashtype: number;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  versionnumber: number;
}
interface EmailHash_Expand {
  activityid_activitypointer: WebExpand<EmailHash_Expand, ActivityPointer_Select, ActivityPointer_Filter, { activityid_activitypointer: ActivityPointer_Result }>;
  activityid_email: WebExpand<EmailHash_Expand, Email_Select, Email_Filter, { activityid_email: Email_Result }>;
  userentityinstancedata_emailhash: WebExpand<EmailHash_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_emailhash: UserEntityInstanceData_Result[] }>;
}
interface EmailHash_FormattedResult {
  activityid_formatted?: string;
  ownerid_formatted?: string;
}
interface EmailHash_Result extends EmailHash_Base, EmailHash_Relationships {
  "@odata.etag": string;
  activityid_guid: string | null;
  ownerid_guid: string | null;
}
interface EmailHash_RelatedOne {
  activityid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  activityid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
}
interface EmailHash_RelatedMany {
  userentityinstancedata_emailhash: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  emailhashes: WebMappingRetrieve<EmailHash_Select,EmailHash_Expand,EmailHash_Filter,EmailHash_Fixed,EmailHash_Result,EmailHash_FormattedResult>;
}
interface WebEntitiesRelated {
  emailhashes: WebMappingRelated<EmailHash_RelatedOne,EmailHash_RelatedMany>;
}
interface WebEntitiesCUDA {
  emailhashes: WebMappingCUDA<EmailHash_Create,EmailHash_Update,EmailHash_Select>;
}

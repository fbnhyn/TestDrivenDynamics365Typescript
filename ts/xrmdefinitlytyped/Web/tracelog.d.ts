interface TraceLog_Base extends WebEntity {
  canbedeleted?: boolean | null;
  collationlevel?: number | null;
  createdon?: Date | null;
  errordetails?: string | null;
  errortypedisplay?: string | null;
  isunique?: boolean | null;
  level?: tracelog_level | null;
  machinename?: string | null;
  modifiedon?: Date | null;
  text?: string | null;
  timezoneruleversionnumber?: number | null;
  traceactionxml?: string | null;
  tracecode?: number | null;
  tracedetailxml?: string | null;
  tracelogid?: string | null;
  traceparameterhash?: number | null;
  traceparameterxml?: string | null;
  tracestatus?: boolean | null;
  utcconversiontimezonecode?: number | null;
}
interface TraceLog_Relationships {
  regardingobjectid_emailserverprofile?: EmailServerProfile_Result | null;
  regardingobjectid_mailbox?: Mailbox_Result | null;
  traceassociation_TraceLog?: TraceAssociation_Result[] | null;
  tracelog_parent_tracelog?: TraceLog_Result[] | null;
}
interface TraceLog extends TraceLog_Base, TraceLog_Relationships {
}
interface TraceLog_Create extends TraceLog {
  parenttracelogid_bind$tracelogs?: string | null;
  regardingobjectid_emailserverprofile_bind$emailserverprofiles?: string | null;
  regardingobjectid_mailbox_bind$mailboxes?: string | null;
}
interface TraceLog_Update extends TraceLog {
}
interface TraceLog_Select {
  canbedeleted: WebAttribute<TraceLog_Select, { canbedeleted: boolean | null }, {  }>;
  collationlevel: WebAttribute<TraceLog_Select, { collationlevel: number | null }, {  }>;
  createdby_guid: WebAttribute<TraceLog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TraceLog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TraceLog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  errordetails: WebAttribute<TraceLog_Select, { errordetails: string | null }, {  }>;
  errortypedisplay: WebAttribute<TraceLog_Select, { errortypedisplay: string | null }, {  }>;
  isunique: WebAttribute<TraceLog_Select, { isunique: boolean | null }, {  }>;
  level: WebAttribute<TraceLog_Select, { level: tracelog_level | null }, { level_formatted?: string }>;
  machinename: WebAttribute<TraceLog_Select, { machinename: string | null }, {  }>;
  modifiedby_guid: WebAttribute<TraceLog_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TraceLog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TraceLog_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<TraceLog_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  parenttracelogid_guid: WebAttribute<TraceLog_Select, { parenttracelogid_guid: string | null }, { parenttracelogid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<TraceLog_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  regardingobjectownerid_guid: WebAttribute<TraceLog_Select, { regardingobjectownerid_guid: string | null }, { regardingobjectownerid_formatted?: string }>;
  regardingobjectowningbusinessunit_guid: WebAttribute<TraceLog_Select, { regardingobjectowningbusinessunit_guid: string | null }, { regardingobjectowningbusinessunit_formatted?: string }>;
  text: WebAttribute<TraceLog_Select, { text: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<TraceLog_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traceactionxml: WebAttribute<TraceLog_Select, { traceactionxml: string | null }, {  }>;
  tracecode: WebAttribute<TraceLog_Select, { tracecode: number | null }, {  }>;
  tracedetailxml: WebAttribute<TraceLog_Select, { tracedetailxml: string | null }, {  }>;
  tracelogid: WebAttribute<TraceLog_Select, { tracelogid: string | null }, {  }>;
  traceparameterhash: WebAttribute<TraceLog_Select, { traceparameterhash: number | null }, {  }>;
  traceparameterxml: WebAttribute<TraceLog_Select, { traceparameterxml: string | null }, {  }>;
  traceregardingid_guid: WebAttribute<TraceLog_Select, { traceregardingid_guid: string | null }, { traceregardingid_formatted?: string }>;
  tracestatus: WebAttribute<TraceLog_Select, { tracestatus: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<TraceLog_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface TraceLog_Filter {
  canbedeleted: boolean;
  collationlevel: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  errordetails: string;
  errortypedisplay: string;
  isunique: boolean;
  level: tracelog_level;
  machinename: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  parenttracelogid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  regardingobjectownerid_guid: XQW.Guid;
  regardingobjectowningbusinessunit_guid: XQW.Guid;
  text: string;
  timezoneruleversionnumber: number;
  traceactionxml: string;
  tracecode: number;
  tracedetailxml: string;
  tracelogid: XQW.Guid;
  traceparameterhash: number;
  traceparameterxml: string;
  traceregardingid_guid: XQW.Guid;
  tracestatus: boolean;
  utcconversiontimezonecode: number;
}
interface TraceLog_Expand {
  createdby: WebExpand<TraceLog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TraceLog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TraceLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TraceLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<TraceLog_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parenttracelogid: WebExpand<TraceLog_Expand, TraceLog_Select, TraceLog_Filter, { parenttracelogid: TraceLog_Result }>;
  regardingobjectid_emailserverprofile: WebExpand<TraceLog_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { regardingobjectid_emailserverprofile: EmailServerProfile_Result }>;
  regardingobjectid_mailbox: WebExpand<TraceLog_Expand, Mailbox_Select, Mailbox_Filter, { regardingobjectid_mailbox: Mailbox_Result }>;
  traceassociation_TraceLog: WebExpand<TraceLog_Expand, TraceAssociation_Select, TraceAssociation_Filter, { traceassociation_TraceLog: TraceAssociation_Result[] }>;
  tracelog_parent_tracelog: WebExpand<TraceLog_Expand, TraceLog_Select, TraceLog_Filter, { tracelog_parent_tracelog: TraceLog_Result[] }>;
  traceregardingid: WebExpand<TraceLog_Expand, TraceRegarding_Select, TraceRegarding_Filter, { traceregardingid: TraceRegarding_Result }>;
}
interface TraceLog_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  level_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  parenttracelogid_formatted?: string;
  regardingobjectid_formatted?: string;
  regardingobjectownerid_formatted?: string;
  regardingobjectowningbusinessunit_formatted?: string;
  traceregardingid_formatted?: string;
}
interface TraceLog_Result extends TraceLog_Base, TraceLog_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parenttracelogid_guid: string | null;
  regardingobjectid_guid: string | null;
  regardingobjectownerid_guid: string | null;
  regardingobjectowningbusinessunit_guid: string | null;
  traceregardingid_guid: string | null;
}
interface TraceLog_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parenttracelogid: WebMappingRetrieve<TraceLog_Select,TraceLog_Expand,TraceLog_Filter,TraceLog_Fixed,TraceLog_Result,TraceLog_FormattedResult>;
  regardingobjectid_emailserverprofile: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
  regardingobjectid_mailbox: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  traceregardingid: WebMappingRetrieve<TraceRegarding_Select,TraceRegarding_Expand,TraceRegarding_Filter,TraceRegarding_Fixed,TraceRegarding_Result,TraceRegarding_FormattedResult>;
}
interface TraceLog_RelatedMany {
  traceassociation_TraceLog: WebMappingRetrieve<TraceAssociation_Select,TraceAssociation_Expand,TraceAssociation_Filter,TraceAssociation_Fixed,TraceAssociation_Result,TraceAssociation_FormattedResult>;
  tracelog_parent_tracelog: WebMappingRetrieve<TraceLog_Select,TraceLog_Expand,TraceLog_Filter,TraceLog_Fixed,TraceLog_Result,TraceLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  tracelogs: WebMappingRetrieve<TraceLog_Select,TraceLog_Expand,TraceLog_Filter,TraceLog_Fixed,TraceLog_Result,TraceLog_FormattedResult>;
}
interface WebEntitiesRelated {
  tracelogs: WebMappingRelated<TraceLog_RelatedOne,TraceLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  tracelogs: WebMappingCUDA<TraceLog_Create,TraceLog_Update,TraceLog_Select>;
}

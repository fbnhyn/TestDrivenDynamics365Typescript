interface PartnerApplication_Base extends WebEntity {
  applicationrole?: partnerapplication_applicationrole | null;
  createdon?: Date | null;
  metadataurl?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  partnerapplicationid?: string | null;
  principalid?: string | null;
  realm?: string | null;
  statecode?: partnerapplication_statecode | null;
  statuscode?: partnerapplication_statuscode | null;
  tenantid?: string | null;
  timezoneruleversionnumber?: number | null;
  useauthorizationserver?: boolean | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface PartnerApplication_Relationships {
  emailserverprofile_incoming_partnerapplication?: EmailServerProfile_Result[] | null;
  emailserverprofile_outgoing_partnerapplication?: EmailServerProfile_Result[] | null;
}
interface PartnerApplication extends PartnerApplication_Base, PartnerApplication_Relationships {
}
interface PartnerApplication_Create extends PartnerApplication {
}
interface PartnerApplication_Update extends PartnerApplication {
}
interface PartnerApplication_Select {
  applicationrole: WebAttribute<PartnerApplication_Select, { applicationrole: partnerapplication_applicationrole | null }, { applicationrole_formatted?: string }>;
  createdby_guid: WebAttribute<PartnerApplication_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PartnerApplication_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PartnerApplication_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  metadataurl: WebAttribute<PartnerApplication_Select, { metadataurl: string | null }, {  }>;
  modifiedby_guid: WebAttribute<PartnerApplication_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PartnerApplication_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PartnerApplication_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PartnerApplication_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<PartnerApplication_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  partnerapplicationid: WebAttribute<PartnerApplication_Select, { partnerapplicationid: string | null }, {  }>;
  principalid: WebAttribute<PartnerApplication_Select, { principalid: string | null }, {  }>;
  realm: WebAttribute<PartnerApplication_Select, { realm: string | null }, {  }>;
  statecode: WebAttribute<PartnerApplication_Select, { statecode: partnerapplication_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<PartnerApplication_Select, { statuscode: partnerapplication_statuscode | null }, { statuscode_formatted?: string }>;
  tenantid: WebAttribute<PartnerApplication_Select, { tenantid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<PartnerApplication_Select, { timezoneruleversionnumber: number | null }, {  }>;
  useauthorizationserver: WebAttribute<PartnerApplication_Select, { useauthorizationserver: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PartnerApplication_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<PartnerApplication_Select, { versionnumber: number | null }, {  }>;
}
interface PartnerApplication_Filter {
  applicationrole: partnerapplication_applicationrole;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  metadataurl: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  partnerapplicationid: XQW.Guid;
  principalid: string;
  realm: string;
  statecode: partnerapplication_statecode;
  statuscode: partnerapplication_statuscode;
  tenantid: XQW.Guid;
  timezoneruleversionnumber: number;
  useauthorizationserver: boolean;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface PartnerApplication_Expand {
  createdby: WebExpand<PartnerApplication_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PartnerApplication_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  emailserverprofile_incoming_partnerapplication: WebExpand<PartnerApplication_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { emailserverprofile_incoming_partnerapplication: EmailServerProfile_Result[] }>;
  emailserverprofile_outgoing_partnerapplication: WebExpand<PartnerApplication_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { emailserverprofile_outgoing_partnerapplication: EmailServerProfile_Result[] }>;
  modifiedby: WebExpand<PartnerApplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PartnerApplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PartnerApplication_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface PartnerApplication_FormattedResult {
  applicationrole_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface PartnerApplication_Result extends PartnerApplication_Base, PartnerApplication_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface PartnerApplication_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface PartnerApplication_RelatedMany {
  emailserverprofile_incoming_partnerapplication: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
  emailserverprofile_outgoing_partnerapplication: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  partnerapplications: WebMappingRetrieve<PartnerApplication_Select,PartnerApplication_Expand,PartnerApplication_Filter,PartnerApplication_Fixed,PartnerApplication_Result,PartnerApplication_FormattedResult>;
}
interface WebEntitiesRelated {
  partnerapplications: WebMappingRelated<PartnerApplication_RelatedOne,PartnerApplication_RelatedMany>;
}
interface WebEntitiesCUDA {
  partnerapplications: WebMappingCUDA<PartnerApplication_Create,PartnerApplication_Update,PartnerApplication_Select>;
}

interface ClientUpdate_Base extends WebEntity {
  clientupdateid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  sqlscript?: string | null;
  versionnumber?: number | null;
  wasexecuted?: boolean | null;
  whenexecute?: clientupdate_whenexecute | null;
}
interface ClientUpdate_Relationships {
  userentityinstancedata_clientupdate?: UserEntityInstanceData_Result[] | null;
}
interface ClientUpdate extends ClientUpdate_Base, ClientUpdate_Relationships {
}
interface ClientUpdate_Create extends ClientUpdate {
}
interface ClientUpdate_Update extends ClientUpdate {
}
interface ClientUpdate_Select {
  clientupdateid: WebAttribute<ClientUpdate_Select, { clientupdateid: string | null }, {  }>;
  createdon: WebAttribute<ClientUpdate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  description: WebAttribute<ClientUpdate_Select, { description: string | null }, {  }>;
  sqlscript: WebAttribute<ClientUpdate_Select, { sqlscript: string | null }, {  }>;
  versionnumber: WebAttribute<ClientUpdate_Select, { versionnumber: number | null }, {  }>;
  wasexecuted: WebAttribute<ClientUpdate_Select, { wasexecuted: boolean | null }, {  }>;
  whenexecute: WebAttribute<ClientUpdate_Select, { whenexecute: clientupdate_whenexecute | null }, { whenexecute_formatted?: string }>;
}
interface ClientUpdate_Filter {
  clientupdateid: XQW.Guid;
  createdon: Date;
  description: string;
  sqlscript: string;
  versionnumber: number;
  wasexecuted: boolean;
  whenexecute: clientupdate_whenexecute;
}
interface ClientUpdate_Expand {
  userentityinstancedata_clientupdate: WebExpand<ClientUpdate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_clientupdate: UserEntityInstanceData_Result[] }>;
}
interface ClientUpdate_FormattedResult {
  createdon_formatted?: string;
  whenexecute_formatted?: string;
}
interface ClientUpdate_Result extends ClientUpdate_Base, ClientUpdate_Relationships {
  "@odata.etag": string;
}
interface ClientUpdate_RelatedOne {
}
interface ClientUpdate_RelatedMany {
  userentityinstancedata_clientupdate: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  clientupdates: WebMappingRetrieve<ClientUpdate_Select,ClientUpdate_Expand,ClientUpdate_Filter,ClientUpdate_Fixed,ClientUpdate_Result,ClientUpdate_FormattedResult>;
}
interface WebEntitiesRelated {
  clientupdates: WebMappingRelated<ClientUpdate_RelatedOne,ClientUpdate_RelatedMany>;
}
interface WebEntitiesCUDA {
  clientupdates: WebMappingCUDA<ClientUpdate_Create,ClientUpdate_Update,ClientUpdate_Select>;
}

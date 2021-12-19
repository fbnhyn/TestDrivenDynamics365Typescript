interface StatusMap_Base extends WebEntity {
  isdefault?: boolean | null;
  objecttypecode?: string | null;
  organizationid?: string | null;
  state?: number | null;
  status?: number | null;
  statusmapid?: string | null;
  versionnumber?: number | null;
}
interface StatusMap_Relationships {
  organizationid_organization?: Organization_Result | null;
  userentityinstancedata_statusmap?: UserEntityInstanceData_Result[] | null;
}
interface StatusMap extends StatusMap_Base, StatusMap_Relationships {
}
interface StatusMap_Create extends StatusMap {
}
interface StatusMap_Update extends StatusMap {
}
interface StatusMap_Select {
  isdefault: WebAttribute<StatusMap_Select, { isdefault: boolean | null }, {  }>;
  objecttypecode: WebAttribute<StatusMap_Select, { objecttypecode: string | null }, {  }>;
  organizationid: WebAttribute<StatusMap_Select, { organizationid: string | null }, {  }>;
  state: WebAttribute<StatusMap_Select, { state: number | null }, {  }>;
  status: WebAttribute<StatusMap_Select, { status: number | null }, {  }>;
  statusmapid: WebAttribute<StatusMap_Select, { statusmapid: string | null }, {  }>;
  versionnumber: WebAttribute<StatusMap_Select, { versionnumber: number | null }, {  }>;
}
interface StatusMap_Filter {
  isdefault: boolean;
  objecttypecode: string;
  organizationid: XQW.Guid;
  state: number;
  status: number;
  statusmapid: XQW.Guid;
  versionnumber: number;
}
interface StatusMap_Expand {
  organizationid_organization: WebExpand<StatusMap_Expand, Organization_Select, Organization_Filter, { organizationid_organization: Organization_Result }>;
  userentityinstancedata_statusmap: WebExpand<StatusMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_statusmap: UserEntityInstanceData_Result[] }>;
}
interface StatusMap_FormattedResult {
}
interface StatusMap_Result extends StatusMap_Base, StatusMap_Relationships {
  "@odata.etag": string;
}
interface StatusMap_RelatedOne {
  organizationid_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface StatusMap_RelatedMany {
  userentityinstancedata_statusmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  statusmaps: WebMappingRetrieve<StatusMap_Select,StatusMap_Expand,StatusMap_Filter,StatusMap_Fixed,StatusMap_Result,StatusMap_FormattedResult>;
}
interface WebEntitiesRelated {
  statusmaps: WebMappingRelated<StatusMap_RelatedOne,StatusMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  statusmaps: WebMappingCUDA<StatusMap_Create,StatusMap_Update,StatusMap_Select>;
}

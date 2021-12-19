interface ManagedProperty_Base extends WebEntity {
  componentstate?: componentstate | null;
  enablesattributename?: string | null;
  enablesentityname?: string | null;
  logicalname?: string | null;
  managedpropertyid?: string | null;
  managedpropertyrowid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
}
interface ManagedProperty_Relationships {
}
interface ManagedProperty extends ManagedProperty_Base, ManagedProperty_Relationships {
}
interface ManagedProperty_Create extends ManagedProperty {
}
interface ManagedProperty_Update extends ManagedProperty {
}
interface ManagedProperty_Select {
  componentstate: WebAttribute<ManagedProperty_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  enablesattributename: WebAttribute<ManagedProperty_Select, { enablesattributename: string | null }, {  }>;
  enablesentityname: WebAttribute<ManagedProperty_Select, { enablesentityname: string | null }, {  }>;
  logicalname: WebAttribute<ManagedProperty_Select, { logicalname: string | null }, {  }>;
  managedpropertyid: WebAttribute<ManagedProperty_Select, { managedpropertyid: string | null }, {  }>;
  managedpropertyrowid: WebAttribute<ManagedProperty_Select, { managedpropertyrowid: string | null }, {  }>;
  overwritetime: WebAttribute<ManagedProperty_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<ManagedProperty_Select, { solutionid: string | null }, {  }>;
}
interface ManagedProperty_Filter {
  componentstate: componentstate;
  enablesattributename: string;
  enablesentityname: string;
  logicalname: string;
  managedpropertyid: XQW.Guid;
  managedpropertyrowid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
}
interface ManagedProperty_Expand {
}
interface ManagedProperty_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface ManagedProperty_Result extends ManagedProperty_Base, ManagedProperty_Relationships {
  "@odata.etag": string;
}
interface ManagedProperty_RelatedOne {
}
interface ManagedProperty_RelatedMany {
}
interface WebEntitiesRetrieve {
  managedproperties: WebMappingRetrieve<ManagedProperty_Select,ManagedProperty_Expand,ManagedProperty_Filter,ManagedProperty_Fixed,ManagedProperty_Result,ManagedProperty_FormattedResult>;
}
interface WebEntitiesRelated {
  managedproperties: WebMappingRelated<ManagedProperty_RelatedOne,ManagedProperty_RelatedMany>;
}
interface WebEntitiesCUDA {
  managedproperties: WebMappingCUDA<ManagedProperty_Create,ManagedProperty_Update,ManagedProperty_Select>;
}

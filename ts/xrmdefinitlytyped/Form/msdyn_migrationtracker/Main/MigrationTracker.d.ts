declare namespace Form.msdyn_migrationtracker.Main {
  namespace MigrationTracker {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_IsMigrationComplete"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_legacyconvertruleid"): Xrm.LookupAttribute<"convertrule">;
      get(name: "msdyn_legacyconvertruleitemid"): Xrm.LookupAttribute<"convertruleitem">;
      get(name: "msdyn_legacyslaid"): Xrm.LookupAttribute<"sla">;
      get(name: "msdyn_legacyslaitemid"): Xrm.LookupAttribute<"slaitem">;
      get(name: "msdyn_migrationstatus"): Xrm.OptionSetAttribute<msdyn_migrationtracker_migrationstatus>;
      get(name: "msdyn_migrationstatusexception"): Xrm.Attribute<string>;
      get(name: "msdyn_migrationstatusreason"): Xrm.Attribute<string>;
      get(name: "msdyn_migrationtype"): Xrm.OptionSetAttribute<msdyn_migrationtracker_migrationtype>;
      get(name: "msdyn_modernconvertruleid"): Xrm.LookupAttribute<"convertrule">;
      get(name: "msdyn_modernconvertruleitemid"): Xrm.LookupAttribute<"convertruleitem">;
      get(name: "msdyn_modernslaid"): Xrm.LookupAttribute<"sla">;
      get(name: "msdyn_modernslaitemid"): Xrm.LookupAttribute<"slaitem">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_objecttypecode"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_migrationtracker_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msdyn_migrationtracker_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_IsMigrationComplete"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_legacyconvertruleid"): Xrm.LookupControl<"convertrule">;
      get(name: "msdyn_legacyconvertruleitemid"): Xrm.LookupControl<"convertruleitem">;
      get(name: "msdyn_legacyslaid"): Xrm.LookupControl<"sla">;
      get(name: "msdyn_legacyslaitemid"): Xrm.LookupControl<"slaitem">;
      get(name: "msdyn_migrationstatus"): Xrm.OptionSetControl<msdyn_migrationtracker_migrationstatus>;
      get(name: "msdyn_migrationstatusexception"): Xrm.StringControl;
      get(name: "msdyn_migrationstatusreason"): Xrm.StringControl;
      get(name: "msdyn_migrationtype"): Xrm.OptionSetControl<msdyn_migrationtracker_migrationtype>;
      get(name: "msdyn_modernconvertruleid"): Xrm.LookupControl<"convertrule">;
      get(name: "msdyn_modernconvertruleitemid"): Xrm.LookupControl<"convertruleitem">;
      get(name: "msdyn_modernslaid"): Xrm.LookupControl<"sla">;
      get(name: "msdyn_modernslaitemid"): Xrm.LookupControl<"slaitem">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_objecttypecode"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetControl<msdyn_migrationtracker_statecode>;
      get(name: "statuscode"): Xrm.OptionSetControl<msdyn_migrationtracker_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface MigrationTracker extends Xrm.PageBase<MigrationTracker.Attributes,MigrationTracker.Tabs,MigrationTracker.Controls> {
    getAttribute(attributeName: "msdyn_IsMigrationComplete"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_legacyconvertruleid"): Xrm.LookupAttribute<"convertrule">;
    getAttribute(attributeName: "msdyn_legacyconvertruleitemid"): Xrm.LookupAttribute<"convertruleitem">;
    getAttribute(attributeName: "msdyn_legacyslaid"): Xrm.LookupAttribute<"sla">;
    getAttribute(attributeName: "msdyn_legacyslaitemid"): Xrm.LookupAttribute<"slaitem">;
    getAttribute(attributeName: "msdyn_migrationstatus"): Xrm.OptionSetAttribute<msdyn_migrationtracker_migrationstatus>;
    getAttribute(attributeName: "msdyn_migrationstatusexception"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_migrationstatusreason"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_migrationtype"): Xrm.OptionSetAttribute<msdyn_migrationtracker_migrationtype>;
    getAttribute(attributeName: "msdyn_modernconvertruleid"): Xrm.LookupAttribute<"convertrule">;
    getAttribute(attributeName: "msdyn_modernconvertruleitemid"): Xrm.LookupAttribute<"convertruleitem">;
    getAttribute(attributeName: "msdyn_modernslaid"): Xrm.LookupAttribute<"sla">;
    getAttribute(attributeName: "msdyn_modernslaitemid"): Xrm.LookupAttribute<"slaitem">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_objecttypecode"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_migrationtracker_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msdyn_migrationtracker_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_IsMigrationComplete"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_legacyconvertruleid"): Xrm.LookupControl<"convertrule">;
    getControl(controlName: "msdyn_legacyconvertruleitemid"): Xrm.LookupControl<"convertruleitem">;
    getControl(controlName: "msdyn_legacyslaid"): Xrm.LookupControl<"sla">;
    getControl(controlName: "msdyn_legacyslaitemid"): Xrm.LookupControl<"slaitem">;
    getControl(controlName: "msdyn_migrationstatus"): Xrm.OptionSetControl<msdyn_migrationtracker_migrationstatus>;
    getControl(controlName: "msdyn_migrationstatusexception"): Xrm.StringControl;
    getControl(controlName: "msdyn_migrationstatusreason"): Xrm.StringControl;
    getControl(controlName: "msdyn_migrationtype"): Xrm.OptionSetControl<msdyn_migrationtracker_migrationtype>;
    getControl(controlName: "msdyn_modernconvertruleid"): Xrm.LookupControl<"convertrule">;
    getControl(controlName: "msdyn_modernconvertruleitemid"): Xrm.LookupControl<"convertruleitem">;
    getControl(controlName: "msdyn_modernslaid"): Xrm.LookupControl<"sla">;
    getControl(controlName: "msdyn_modernslaitemid"): Xrm.LookupControl<"slaitem">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_objecttypecode"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<msdyn_migrationtracker_statecode>;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<msdyn_migrationtracker_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}

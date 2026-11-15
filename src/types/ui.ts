
export interface IconProps {
  className?: string;
}

export interface BackLinkProps {
  href?: string;
  label?: string;
}

export interface Filter {
  id: string;
  label: string;
}

export interface ProjectFiltersProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
}


export interface NavLink {
  href: string;
  label: string;
}
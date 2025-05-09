
export interface ApplicantsResponse {
  applicants: Applicant[];
}

export interface Applicant {
  Id:               number;
  Nombre:           string;
  Apellido:         string;
  Correo:           string;
  Genero:           string;
  Edad:             string;
  Identidad:        string;
  Telefono:         string;
  Puesto_aplica:    string;
  Ciudad:           string;
  Nivel_educativo:  string;
  Empresa:          string;
  Bilingue:         string;
  Curriculum:       string;
  Fecha_envio:      string;
  Fecha_revision:   string;
  Usuario_envio:    string;
  Usuario_revision: string;
  Estado:           string;
}

import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
        *,
        tasks (
          id,
          name,
          status,
          due_date
        )
      `,
    )
    .eq('slug', slug)
    .single()
export type Project = QueryData<ReturnType<typeof projectQuery>>

export const projectsQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof projectsQuery>

export const taskQuery = (id: number) =>
  supabase
    .from('tasks')
    .select(
      `
        *,
        projects (
          id,
          name,
          slug
        )
      `,
    )
    .eq('id', id)
    .single()
export type TaskWithProject = QueryData<ReturnType<typeof taskQuery>>

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects (
    id,
    name,
    slug
  )
`)
export type TasksWithProject = QueryData<typeof tasksWithProjectsQuery>

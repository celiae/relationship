SELECT name,relation FROM relationship.people,relationship.relation
where relationship.people.id = relationship.relation.people_id
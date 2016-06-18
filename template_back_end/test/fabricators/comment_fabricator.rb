Fabricator(:comment) do
  content { Faker::Lorem.paragraph}
  author { Faker::Name.name}
  post
end

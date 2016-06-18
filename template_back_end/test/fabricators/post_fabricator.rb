Fabricator(:post) do
  title { Faker::Name.title}
  content { Faker::Lorem.paragraph}
  author { Faker::Name.name}
end
